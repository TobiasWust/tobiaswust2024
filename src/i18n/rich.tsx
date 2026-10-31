import { Fragment } from 'react';

// turns "a *highlighted* word" into text with the *…* parts wrapped in <Tag className>
export function rich(text: string, className?: string, Tag: 'span' | 'em' = 'span') {
  return text.split('*').map((part, i) =>
    i % 2 === 1 ? <Tag key={i} className={className}>{part}</Tag> : <Fragment key={i}>{part}</Fragment>
  );
}
