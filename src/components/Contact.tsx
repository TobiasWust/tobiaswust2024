import style from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact">
      <h2>GET IN TOUCH</h2>

      <form className={style.form} name="contact" method="POST" data-netlify="true">
        <p>Share the details of your project with me, and I&apos;ll get back to you within 48 hours.</p>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder='Name' />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder='Email' />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder='Message'></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}
