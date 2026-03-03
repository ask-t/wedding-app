interface EventCardProps {
  id: string
  icon: string
  title: string
  date: string
  time: string
  venue: string
  address: string
  mapsUrl?: string
  note?: string
  notices?: string[]
}

function EventCard({ id, icon, title, date, time, venue, address, mapsUrl, note, notices }: EventCardProps) {
  const defaultMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const finalMapsUrl = mapsUrl || defaultMapsUrl

  return (
    <div id={id} className="event-card">
      <div className="event-card__header">
        <div className="event-card__icon">{icon}</div>
        <h3 className="event-card__title">{title}</h3>
        {note && <p className="event-card__note">{note}</p>}
      </div>
      <div className="event-card__body">
        <div className="event-card__details">
          <div className="event-card__row">
            <span className="event-card__label">Date</span>
            <span>{date}</span>
          </div>
          <div className="event-card__row">
            <span className="event-card__label">Time</span>
            <span>{time}</span>
          </div>
          <div className="event-card__row">
            <span className="event-card__label">Venue</span>
            <span>{venue}</span>
          </div>
          <div className="event-card__row">
            <span className="event-card__label">Address</span>
            <span>{address}</span>
          </div>
        </div>
        {notices && notices.length > 0 && (
          <ul className="event-card__notices">
            {notices.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        )}
        <a href={finalMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
          Get Directions
        </a>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="container">
        <h2 className="section__title">Celebration Details</h2>
        <p className="section__subtitle">Join us for these special moments</p>
        <div className="events__grid">
          <EventCard
            id="ceremony"
            icon="℘"
            title="Temple Sealing"
            date="April 25, 2026"
            time="8:45 AM"
            venue="Laie Hawaii Temple"
            address="55-600 Naniloa Loop, Laie, HI 96762"
            mapsUrl="https://maps.app.goo.gl/cFF93SwYhG7pdn5JA"
            note="Join us as we are sealed for time and all eternity."
            notices={[
              'Temple sealing is by invitation only.',
              'All other guests are welcome to gather at the temple grounds at 9:20 AM for a group photo.',
            ]}
          />
          <EventCard
            id="reception"
            icon="✦"
            title="Wedding Reception"
            date="April 25, 2026"
            time="1:00 PM"
            venue="The Aloha Center Ballroom"
            address="55-220 Kulanui St Laie, HI 96762"
            mapsUrl="https://maps.app.goo.gl/qFhmur7JbRUWPyAH6"
            note="Please celebrate with us at our reception. Lunch will be served."
          />
        </div>

        {/* Additional Event Details */}
        <div className="events__details">
          <div className="detail-section">
            <h3 className="detail-section__title">Dress Code</h3>
            <div className="detail-section__content">
              <p>We kindly request formal or semi-formal attire. Think elegant and celebratory!</p>
              <p><strong>For the Temple:</strong> Conservative, modest clothing is appreciated.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
