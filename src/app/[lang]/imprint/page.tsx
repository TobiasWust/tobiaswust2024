import Link from "next/link";
import { isLocale } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";

export default function Imprint({ params }: { params: { lang: string } }) {
  const { legal } = getDictionary(isLocale(params.lang) ? params.lang : "en");

  return (
    <main>
      <div className="legal">
        <h1>{legal.imprint}</h1>
        <hr />
        <p>{legal.imprintLaw}</p>

        <p>Tobias Wust<br />
          Vor den Kämpen 20<br />
          30851 Langenhagen</p>

        <p>
          <b>{legal.contact} </b> <Link href="/#contact">{legal.imprintContact}</Link> <br />
          <b>{legal.mail}</b> Webmaster (at) tobiaswust.de<br />
          <b>{legal.vat}</b> DE317980584
        </p>
      </div>
    </main>
  )
}
