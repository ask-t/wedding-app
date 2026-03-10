interface TimeSlot {
  time: string
  note: string
}

interface EventEntryProps {
  id: string
  icon: string
  title: string
  date: string
  time: string
  timeSlots?: TimeSlot[]
  venue: string
  address: string
  mapsUrl?: string
  note?: string
}

function EventEntry({ id, icon, title, date, time, timeSlots, venue, address, mapsUrl, note }: EventEntryProps) {
  const finalMapsUrl = mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <div id={id} className="event">
      <div className="event__icon">{icon}</div>
      <h3 className="event__name">{title}</h3>
      <div className="event__ornament">
        <span /><span className="event__ornament-dot" /><span />
      </div>
      <div className="event__info">
        <div className="event__row">
          <span className="event__label">Date</span>
          <span className="event__value">{date}</span>
        </div>
        {timeSlots ? (
          timeSlots.map((slot, i) => (
            <div key={i} className="event__row">
              <span className="event__label">{i === 0 ? 'Time' : ''}</span>
              <span className="event__value">
                {slot.time}
                <span className="event__slot-note">{slot.note}</span>
              </span>
            </div>
          ))
        ) : (
          <div className="event__row">
            <span className="event__label">Time</span>
            <span className="event__value">{time}</span>
          </div>
        )}
        <div className="event__row">
          <span className="event__label">Venue</span>
          <span className="event__value">{venue}</span>
        </div>
        <div className="event__row">
          <span className="event__label">Address</span>
          <span className="event__value">{address}</span>
        </div>
      </div>
      {note && <p className="event__note">{note}</p>}
      <a href={finalMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
        Get Directions
      </a>
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="container">
        <h2 className="section__title">Celebration Details</h2>
        <p className="section__subtitle">Join us for these special moments</p>
        <div className="events__pair">
          <EventEntry
            id="ceremony"
            icon="℘"
            title="Temple Sealing"
            date="April 25, 2026"
            time="8:45 AM"
            timeSlots={[
              { time: '8:45 AM', note: 'Sealing — invited guests only' },
              { time: '9:20 AM', note: 'Group photograph — all welcome' },
            ]}
            venue="Laie Hawaii Temple"
            address="55-600 Naniloa Loop, Laie, HI 96762"
            mapsUrl="https://maps.app.goo.gl/cFF93SwYhG7pdn5JA"
            note="Join us as we are sealed for time and all eternity."
          />
          <div className="events__vdivider" />
          <EventEntry
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
              <p>We'd love for guests to embrace a <strong>light spring palette</strong> — soft pastels, florals, and fresh colors are all welcome.</p>
              <p><strong>For the Temple:</strong> Sunday best — think what you'd wear to a church service.</p>
              <img
                src="/images/Spring_Color.jpg"
                alt="Light Spring Color Palette"
                style={{ width: '100%', maxWidth: '480px', borderRadius: '12px', marginTop: '1rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
