import Link from "next/link";

export default function Imprint() {
  return (
    <div>
      <h1>Imprint</h1>
      <hr />
      <p>german § 5 TMG</p>

      <p>Tobias Wust<br />
        Vor den Kämpen 20<br />
        30851 Langenhagen</p>

      <p>
        <b>Mail:</b> Webmaster (at) tobiaswust.de<br />
        <b>Contactform: </b> <Link href="/#contact">Meine bevorzugte Methode</Link> <br />
        <b>USt-IdNr.:</b> DE317980584
      </p>

    </div>
  )
}
