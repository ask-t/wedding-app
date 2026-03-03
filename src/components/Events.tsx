interface EventCardProps {
  id: string
  icon: string
  title: string
  date: string
  time: string
  venue: string
  address: string
  note?: string
}

function EventCard({ id, icon, title, date, time, venue, address, note }: EventCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  return (
    <div id={id} className="event-card">
      <div className="event-card__icon">{icon}</div>
      <h3 className="event-card__title">{title}</h3>
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
      {note && <p className="event-card__note">{note}</p>}
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
        Get Directions
      </a>
    </div>
  )
}

export default function Events() {
  return (
    <section className="section events">
      <div className="container">
        <h2 className="section__title">Celebration Details</h2>
        <p className="section__subtitle">Join us for these special moments</p>
        <div className="events__grid">
          <EventCard
            id="ceremony"
            icon="💍"
            title="Temple Sealing"
            date="April 25, 2026"
            time="8:45 AM"
            venue="Laie Hawaii Temple"
            address="55-600 Naniloa Loop, Laie, HI 96762"
            note="Join us as we are sealed for time and all eternity."
          />
          <EventCard
            id="reception"
            icon="🥂"
            title="Wedding Reception"
            date="April 25, 2026"
            time="1:00 PM"
            venue="The Aloha Center Ballroom"
            address="55-220 Kulanui St Laie, HI 96762"
            note="Please celebrate with us at our reception. Lunch will be served."
          />
        </div>
      </div>
    </section>
  )
}
