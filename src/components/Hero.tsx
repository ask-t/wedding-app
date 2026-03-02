import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2026-06-14T15:00:00')

function getCountdown() {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function Hero() {
  const [countdown, setCountdown] = useState(getCountdown)

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">We're getting married</p>
        <h1 className="hero__names">Alex &amp; Jordan</h1>
        <p className="hero__date">June 14, 2026</p>
        <div className="hero__divider">
          <span />
          <span className="hero__divider-icon">♥</span>
          <span />
        </div>
        <div className="hero__countdown">
          {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
            <div key={unit} className="hero__countdown-unit">
              <span className="hero__countdown-num">{String(countdown[unit]).padStart(2, '0')}</span>
              <span className="hero__countdown-label">{unit}</span>
            </div>
          ))}
        </div>
        <a
          href="#rsvp"
          className="btn btn--primary"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          RSVP Now
        </a>
      </div>
    </section>
  )
}
