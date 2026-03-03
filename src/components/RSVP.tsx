// RSVP Google Form link
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdNAUclq02qJGsspcaFbXPd2FNV1DWpE0IAIJjaaWRV1qmS3w/viewform?embedded=true'
const GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSdNAUclq02qJGsspcaFbXPd2FNV1DWpE0IAIJjaaWRV1qmS3w/viewform'

export default function RSVP() {
  return (
    <section id="rsvp" className="section rsvp">
      <div className="container">
        <h2 className="section__title">RSVP</h2>
        <p className="section__subtitle">
          Please respond by <strong>April 18, 2026</strong>. We can't wait to celebrate with you!
        </p>
        <div className="rsvp__frame-wrap">
          <iframe
            src={GOOGLE_FORM_URL}
            className="rsvp__frame"
            title="RSVP Form"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
        <p className="rsvp__fallback">
          Having trouble with the form?{' '}
          <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer">
            Open it directly ↗
          </a>
        </p>
      </div>
    </section>
  )
}
