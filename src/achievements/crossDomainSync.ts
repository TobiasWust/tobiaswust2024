import achievementStore from './achievementStore';

// each language lives on its own domain, and localStorage is per domain, so the language switch
// carries the achievements over in the URL and the other domain merges them into its own store
const PARAM = 'achievements';

type Snapshot = { ids: string[], counters: Record<string, number> };

function encode(snapshot: Snapshot): string {
  const bytes = new TextEncoder().encode(JSON.stringify(snapshot));
  const binary = Array.from(bytes, (b) => String.fromCharCode(b)).join('');
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decode(value: string): Snapshot | undefined {
  try {
    const binary = atob(value.replace(/-/g, '+').replace(/_/g, '/'));
    const parsed = JSON.parse(new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0))));
    const ids = Array.isArray(parsed?.ids) ? parsed.ids.filter((id: unknown) => typeof id === 'string') : [];
    const counters: Record<string, number> = {};
    if (parsed?.counters && typeof parsed.counters === 'object') {
      for (const [name, count] of Object.entries(parsed.counters)) {
        if (typeof count === 'number' && Number.isFinite(count)) counters[name] = count;
      }
    }
    return { ids, counters };
  } catch {
    return undefined;
  }
}

// adds the current achievements to a link to the other domain; nothing to add when there are none yet
export function withAchievements(href: string): string {
  const { achievementIds, counters } = achievementStore.getState();
  if (!achievementIds.length && !Object.keys(counters).length) return href;
  const url = new URL(href);
  url.searchParams.set(PARAM, encode({ ids: achievementIds, counters }));
  return url.toString();
}

// merges achievements that came along from the other domain, without toasts, then cleans the URL
export function importAchievementsFromUrl() {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(PARAM);
  if (value === null) return;

  const snapshot = decode(value);
  if (snapshot) {
    const { achievementIds, counters } = achievementStore.getState();
    const mergedCounters = { ...counters };
    for (const [name, count] of Object.entries(snapshot.counters)) {
      mergedCounters[name] = Math.max(mergedCounters[name] ?? 0, count);
    }
    achievementStore.setState({
      achievementIds: Array.from(new Set([...achievementIds, ...snapshot.ids])),
      counters: mergedCounters,
    });
  }

  url.searchParams.delete(PARAM);
  window.history.replaceState(window.history.state, '', url.toString());
}
