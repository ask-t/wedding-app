const options = [
  {
    icon: '📦',
    title: 'Amazon Registry',
    description: 'Browse our curated wishlist of items to help us build our home together.',
    label: 'View Registry',
    href: 'https://www.amazon.com/wedding/share/ask-erie',
    color: 'registry-card--amazon',
  },
  {
    icon: '💚',
    title: 'Venmo',
    description: 'Prefer to give a cash gift? Send it directly via Venmo — every bit is so appreciated.',
    label: 'Send via Venmo',
    href: 'https://venmo.com/u/erietse',
    color: 'registry-card--venmo',
  },
]

export default function Registry() {
  return (
    <section id="registry" className="section registry">
      <div className="container">
        <h2 className="section__title">Registry &amp; Gifts</h2>
        <p className="section__subtitle">
          Your presence is the greatest gift — but if you'd like to celebrate with a gift, here are some ways to do so.
        </p>
        <div className="registry__grid">
          {options.map((opt) => (
            <div key={opt.title} className={`registry-card ${opt.color}`}>
              <div className="registry-card__icon">{opt.icon}</div>
              <h3 className="registry-card__title">{opt.title}</h3>
              <p className="registry-card__desc">{opt.description}</p>
              <a
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                {opt.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
