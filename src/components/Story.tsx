const milestones = [
  {
    year: '2019',
    title: 'First Meeting',
    body: 'We met at a friend\'s party and talked all night. Neither of us wanted to leave.',
  },
  {
    year: '2020',
    title: 'Our First Date',
    body: 'Coffee turned into dinner, dinner turned into a walk, and a walk turned into the beginning of everything.',
  },
  {
    year: '2022',
    title: 'Moving In Together',
    body: 'We packed up our lives and built a home together — and somehow survived assembling IKEA furniture without breaking up.',
  },
  {
    year: '2025',
    title: 'The Proposal',
    body: 'On a quiet evening at our favorite spot, the question was asked — and the answer was an enthusiastic yes.',
  },
  {
    year: '2026',
    title: 'Forever Begins',
    body: 'We can\'t wait to celebrate with everyone we love and start this next chapter together.',
  },
]

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="container">
        <h2 className="section__title">Our Story</h2>
        <p className="section__subtitle">A love story worth telling</p>
        <div className="timeline">
          {milestones.map((m, i) => (
            <div key={m.year} className={`timeline__item${i % 2 === 0 ? '' : ' timeline__item--right'}`}>
              <div className="timeline__card">
                <span className="timeline__year">{m.year}</span>
                <h3 className="timeline__title">{m.title}</h3>
                <p className="timeline__body">{m.body}</p>
              </div>
              <div className="timeline__dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
