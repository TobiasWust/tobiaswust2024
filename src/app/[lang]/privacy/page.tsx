import { isLocale } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";

// Keep this in sync with what the site actually loads: hosting + form (Netlify), analytics (GoatCounter),
// images (Cloudinary), skill logos (cdn.svgporn.com, simpleicons.org), browser storage (theme, achievements).
export default function Privacy({ params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : "en";

  return (
    <main id="content">
      <div className="legal" lang="de">
        {lang === "en" && <p lang="en"><em>{getDictionary("en").legal.germanOnly}</em></p>}
        <h1>Datenschutzerklärung</h1>
        <hr />

        <h2>Verantwortlicher</h2>
        <p>
          Tobias Wust<br />
          Vor den Kämpen 20<br />
          30851 Langenhagen<br />
          E-Mail: webmaster (at) tobiaswust.de
        </p>

        <h2>Das Wichtigste in Kürze</h2>
        <ul>
          <li>Diese Website setzt keine Cookies.</li>
          <li>Es gibt kein Tracking und keine Werbung. Die Reichweite wird anonym und ohne Cookies mit GoatCounter gemessen.</li>
          <li>Personenbezogene Daten verarbeite ich nur, wenn Sie mir über das Kontaktformular schreiben, und soweit es für den
            technischen Betrieb der Website nötig ist.</li>
        </ul>

        <h2>Hosting</h2>
        <p>Diese Website wird bei Netlify (Netlify, Inc., USA) gehostet. Beim Aufruf der Website verarbeitet Netlify technisch
          notwendige Daten, die Ihr Browser automatisch übermittelt, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Aufrufs,
          die aufgerufene Seite, die zuvor besuchte Seite (Referrer) sowie Browser und Betriebssystem. Diese Daten sind nötig,
          um die Website auszuliefern und ihre Sicherheit zu gewährleisten.</p>
        <p>Rechtsgrundlage ist mein berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung der Website gemäß
          Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen finden Sie in der Datenschutzerklärung von Netlify:{" "}
          <a href="https://www.netlify.com/privacy/">https://www.netlify.com/privacy/</a></p>

        <h2>Kontaktformular</h2>
        <p>Wenn Sie mir über das Kontaktformular schreiben, werden Ihr Name, Ihre E-Mail-Adresse und Ihre Nachricht übermittelt.
          Das Formular wird über den Dienst Netlify Forms verarbeitet; die Angaben werden dort gespeichert und mir zugestellt.
          Ich nutze sie ausschließlich, um Ihre Anfrage zu beantworten.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag abzielt, und im Übrigen mein
          berechtigtes Interesse an der Beantwortung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO. Ich lösche die Angaben,
          sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

        <h2>Reichweitenmessung mit GoatCounter</h2>
        <p>Um zu verstehen, welche Seiten wie oft aufgerufen werden, nutze ich auf Grundlage meines berechtigten Interesses
          gemäß Art. 6 Abs. 1 lit. f DSGVO den Dienst GoatCounter (goatcounter.com). GoatCounter setzt keine Cookies und
          erstellt keine Nutzerprofile. Bei einem Seitenaufruf werden lediglich allgemeine Angaben wie die aufgerufene Seite,
          die verweisende Seite (Referrer), Browser, Bildschirmgröße und das Land übermittelt. Ihre IP-Adresse wird von
          GoatCounter nicht gespeichert. Weitere Informationen:{" "}
          <a href="https://www.goatcounter.com/help/privacy">https://www.goatcounter.com/help/privacy</a></p>

        <h2>Bilder und Logos von externen Servern</h2>
        <p>Einige Inhalte werden direkt von externen Servern geladen. Dabei erhält der jeweilige Anbieter technisch bedingt Ihre
          IP-Adresse und Angaben zu Ihrem Browser, weil er die Datei sonst nicht an Ihren Browser ausliefern kann:</p>
        <ul>
          <li>Projekt-Screenshots und Fotos über Cloudinary (cloudinary.com),{" "}
            <a href="https://cloudinary.com/privacy">https://cloudinary.com/privacy</a></li>
          <li>Technologie-Logos über cdn.svgporn.com und simpleicons.org</li>
        </ul>
        <p>Rechtsgrundlage ist mein berechtigtes Interesse an einer schnellen und ansprechenden Darstellung der Website gemäß
          Art. 6 Abs. 1 lit. f DSGVO.</p>

        <h2>Speicherung im Browser</h2>
        <p>Diese Website setzt keine Cookies. Sie speichert lediglich im lokalen Speicher Ihres Browsers (Local Storage), ob Sie
          das helle oder dunkle Design gewählt haben, sowie Ihren Fortschritt bei den versteckten Achievements. Diese Angaben
          verlassen Ihr Gerät nicht und werden nicht an mich oder Dritte übermittelt. Sie können sie jederzeit über die
          Einstellungen Ihres Browsers löschen.</p>

        <h2>Übermittlung in Drittländer</h2>
        <p>Einige der genannten Anbieter haben ihren Sitz in den USA oder verarbeiten Daten dort. Eine Übermittlung erfolgt
          nur, soweit die EU-Kommission für das Drittland bzw. den zertifizierten Anbieter ein angemessenes Datenschutzniveau
          festgestellt hat (insbesondere über das EU-US Data Privacy Framework) oder geeignete Garantien wie die
          EU-Standardvertragsklauseln vereinbart sind.</p>

        <h2>Links zu anderen Websites</h2>
        <p>Diese Website enthält Links zu anderen Websites, etwa zu GitHub, LinkedIn oder zu meinen Projekten. Erst wenn Sie
          einen solchen Link anklicken, werden Daten an den jeweiligen Betreiber übermittelt; dafür gilt dessen
          Datenschutzerklärung.</p>

        <h2>Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO), auf
          Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und
          Datenübertragbarkeit (Art. 20 DSGVO). Soweit eine Verarbeitung auf meinem berechtigten Interesse beruht, können Sie
          ihr widersprechen (Art. 21 DSGVO). Wenden Sie sich dazu einfach an die oben genannte Adresse.</p>
        <p>Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei
          einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).</p>

        <h2>Verschlüsselung</h2>
        <p>Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
          Sie daran, dass die Adresszeile Ihres Browsers mit „https://“ beginnt und ein Schloss-Symbol zeigt.</p>

        <h2>Änderungen</h2>
        <p>Ich passe diese Datenschutzerklärung an, wenn sich die Website oder die rechtlichen Anforderungen ändern. Es gilt die
          jeweils hier veröffentlichte Fassung.</p>
      </div>
    </main>
  );
}
