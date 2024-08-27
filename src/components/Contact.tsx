'use client';

import { FormEvent, useState } from 'react';
import style from './Contact.module.scss'
import achievementStore from '../achievements/achievementStore';

export default function Contact() {
  const [status, setStatus] = useState<String | null>(null);
  const [error, setError] = useState<String | null>(null);
  const addAchievement = achievementStore((state) => state.addAchievement);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    addAchievement('useContactForm');
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm as HTMLFormElement);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>,).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  return (
    <section id="contact" className={style.contact}>
      <h2>GET IN TOUCH</h2>

      <form onSubmit={handleFormSubmit} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <h3>Share the details of your project with me, and I&apos;ll get back to you within 48 hours.</h3>

        <input type="hidden" name="form-name" value="contact" />
        <input type="text" id="name" name="name" required placeholder='Name' />

        <input type="email" id="email" name="email" required placeholder='Email' />

        <textarea id="message" name="message" required placeholder='Message'></textarea>

        <button type="submit" disabled={status === 'pending'}>Send</button>
        {status === 'ok' && (
          <p>
            Thank you for reaching out :)
          </p>
        )}
        {status === 'error' && (
          <p>
            Error: {error}
          </p>
        )}
      </form>

    </section>
  )
}
