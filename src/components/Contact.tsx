'use client';

import { FormEvent, useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { VscLinkExternal } from 'react-icons/vsc';
import style from './Contact.module.scss'
import achievementStore from '../achievements/achievementStore';
import { FaCalendarAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { BOOKING_URL } from '../data/contact';
import Availability from './Availability';
import EmailLink from './EmailLink';
import { useI18n } from '../i18n/I18nProvider';
import { rich } from '../i18n/rich';

export default function Contact() {
  const [status, setStatus] = useState<String | null>(null);
  const [error, setError] = useState<String | null>(null);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const { t } = useI18n();

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
        <h2>{t.contact.heading}</h2>
        <div className={style.availability}>
          <Availability />
        </div>
        <p>{t.contact.pitch}</p>
        <p>{rich(t.contact.reply, style.highlight)}</p>
        <div className={style.ways}>
          <h3>{t.contact.waysHeading}</h3>
          <ul>
            {t.contact.ways.map((engagement) => (
              <li key={engagement.title} title={engagement.text}>{engagement.title}</li>
            ))}
          </ul>
        </div>
        <ul className={style.direct}>
          <li>
            <EmailLink className="link"><FaEnvelope /> </EmailLink>
          </li>
          <li>
            <a className="link" href="https://www.linkedin.com/in/tobias-wust/" rel="noopener noreferrer" target="_blank">
              <SiLinkedin /> {t.contact.linkedin}
            </a>
          </li>
          <li>
            <a className="link" href="https://github.com/TobiasWust" rel="noopener noreferrer" target="_blank">
              <SiGithub /> {t.contact.github}
            </a>
          </li>
          <li>
            <a className="link" href={t.about.cvUrl} rel="noopener noreferrer" target="_blank"
              onClick={() => addAchievement('potentialClient')}>
              <VscLinkExternal /> {t.contact.cv}
            </a>
          </li>
        </ul>
      </div>

      {/* both ways to get in touch side by side: the form, and a call as the quieter alternative */}
      <div className={style.side}>
        <form onSubmit={handleFormSubmit} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          {/* honeypot: hidden from people and assistive tech; bots that fill it get dropped by Netlify */}
          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="bot-field">Leave empty</label>
            <input type="text" id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
          </div>

          <div className={style.field}>
            <label htmlFor="name">{t.contact.name}</label>
            <input type="text" id="name" name="name" autoComplete="name" required />
          </div>

          <div className={style.field}>
            <label htmlFor="email">{t.contact.email}</label>
            <input type="email" id="email" name="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required />
          </div>

          <div className={style.field}>
            <label htmlFor="message">{t.contact.messageLabel}</label>
            <textarea id="message" name="message" required placeholder={t.contact.message}></textarea>
          </div>

          <button type="submit" disabled={status === 'pending'}>
            {status === 'pending' ? t.contact.sending : t.contact.send}
          </button>
          <p role="status" className={style.status}>
            {status === 'ok' && (
              <>
                <FaPaperPlane aria-hidden className={style.plane} />
                {t.contact.thanks}
              </>
            )}
            {status === 'error' && `${t.contact.error} ${error}`}
          </p>
        </form>
        {BOOKING_URL && (
          <div className={style.call}>
            <p>{t.contact.bookingIntro}</p>
            <a className={style.booking} href={BOOKING_URL} rel="noopener noreferrer" target="_blank">
              <FaCalendarAlt /> {t.contact.booking}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
