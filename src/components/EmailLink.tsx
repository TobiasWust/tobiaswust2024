'use client';

import { useEffect, useState } from 'react';
import { EMAIL_DOMAIN, EMAIL_USER } from '../data/contact';

export default function EmailLink({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => setEmail(`${EMAIL_USER}@${EMAIL_DOMAIN}`), []);

  if (!email) return <span className={className}>{children}{EMAIL_USER} [at] {EMAIL_DOMAIN}</span>;
  return <a className={className} href={`mailto:${email}`}>{children}{email}</a>;
}
