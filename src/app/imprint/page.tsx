import Link from "next/link";

export default function Imprint() {
  return (
    <main>
      <div className="legal">
        <h1>Imprint</h1>
        <hr />
        <p>german § 5 TMG</p>

        <p>Tobias Wust<br />
          Vor den Kämpen 20<br />
          30851 Langenhagen</p>

        <p>
          <b>Contact: </b> <Link href="/#contact">Please use my contact form</Link> <br />
          <b>Mail:</b> Webmaster (at) tobiaswust.de<br />
          <b>USt-IdNr.:</b> DE317980584
        </p>
      </div>
    </main>
  )
}
