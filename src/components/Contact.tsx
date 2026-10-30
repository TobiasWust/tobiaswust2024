'use client';

import { FormEvent, useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { VscLinkExternal } from 'react-icons/vsc';
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
      const myForm = event.target as HTMLFormElement;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>,).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
        myForm.reset();
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
      <div className={style.pitch}>
        <h2>Get in touch</h2>
        <p>Have a project in mind, need an extra pair of hands on your team, or want a second opinion on your frontend architecture?</p>
        <p>Share the details and I&apos;ll get back to you <span className={style.highlight}>within 48 hours</span>.</p>
        <ul className={style.direct}>
          <li>
            <a className="link" href="https://www.linkedin.com/in/tobias-wust/" rel="noopener noreferrer" target="_blank">
              <SiLinkedin /> Connect on LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href="https://github.com/TobiasWust" rel="noopener noreferrer" target="_blank">
              <SiGithub /> Browse my GitHub
            </a>
          </li>
          <li>
            <a className="link" href="https://cv.wust.dev" rel="noopener noreferrer" target="_blank"
              onClick={() => addAchievement('potentialClient')}>
              <VscLinkExternal /> Read my CV
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleFormSubmit} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <label className="visually-hidden" htmlFor="name">Name</label>
        <input type="text" id="name" name="name" autoComplete="name" required placeholder='Name' />

        <label className="visually-hidden" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="email" required placeholder='Email' />

        <label className="visually-hidden" htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder='Tell me about your project'></textarea>

        <button type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? 'Sending…' : 'Send message'}
        </button>
        <p role="status" className={style.status}>
          {status === 'ok' && 'Thank you for reaching out :)'}
          {status === 'error' && `Error: ${error}`}
        </p>
      </form>
    </section>
  )
}
