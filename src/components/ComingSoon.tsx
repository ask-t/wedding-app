interface Props {
  title: string
  subtitle?: string
}

export default function ComingSoon({ title, subtitle }: Props) {
  return (
    <section className="coming-soon">
      <div className="container">
        <div className="coming-soon__content">
          <div className="coming-soon__icon">✦ ✦ ✦</div>
          <h1 className="coming-soon__title">{title}</h1>
          {subtitle && <p className="coming-soon__subtitle">{subtitle}</p>}
          <div className="coming-soon__divider">
            <span />
            <span className="coming-soon__divider-icon">♡</span>
            <span />
          </div>
          <p className="coming-soon__badge">Coming Soon</p>
          <p className="coming-soon__note">We're working on something beautiful. Check back soon.</p>
        </div>
      </div>
    </section>
  )
}
