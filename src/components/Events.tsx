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
            title="Wedding Ceremony"
            date="Sunday, June 14, 2026"
            time="3:00 PM"
            venue="The Grand Chapel"
            address="123 Chapel Lane, New York, NY 10001"
            note="Please arrive 15 minutes early. Seating begins at 2:30 PM."
          />
          <EventCard
            id="reception"
            icon="🥂"
            title="Wedding Reception"
            date="Sunday, June 14, 2026"
            time="5:30 PM – 10:00 PM"
            venue="The Garden Ballroom"
            address="456 Garden Ave, New York, NY 10002"
            note="Cocktail hour begins immediately following the ceremony. Dinner service at 6:30 PM."
          />
        </div>
      </div>
    </section>
  )
}
