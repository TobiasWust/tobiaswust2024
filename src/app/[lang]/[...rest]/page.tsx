import { notFound } from 'next/navigation';

// every unknown path ends up here after the middleware rewrite, so the localized 404 renders
export default function CatchAll() {
  notFound();
}
