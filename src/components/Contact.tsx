import style from './Contact.module.css'

export default function Contact() {
  return (
    <section>
      <h2>CONTACT</h2>
      <p>Share the details of your project with me, and I&apos;ll get back to you within 48 hours.</p>

      <form className={style.form} name="contact" method="POST" data-netlify="true">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}
