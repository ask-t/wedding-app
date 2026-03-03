import { useState } from 'react'

type Tag = 'all' | 'engagement' | 'temple' | 'together'

const TAGS: { value: Tag; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'engagement', label: 'Engagement' },
  { value: 'temple', label: 'Temple' },
  { value: 'together', label: 'Together' },
]

const photos = [
  // Engagement
  { src: '/images/engage-photo/Ask01-fix.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask04.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask09.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask13.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask14-fix.png', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask16.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask23.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask35-fix.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask36-fix.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask38.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask41.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  { src: '/images/engage-photo/Ask42.jpg', alt: 'Engagement Photo', tag: 'engagement' as Tag },
  // Temple
  { src: '/images/temple/IMG_1236.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_1238.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_1322.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_2663.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_2699.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_3014.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_3108.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_3526.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_3529.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_3530.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  { src: '/images/temple/IMG_3534.JPG', alt: 'Temple Photo', tag: 'temple' as Tag },
  // Together
  { src: '/images/general/IMG_1308.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_1400.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_1606.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_2344.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_2385.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_2689.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_2976.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_2978.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_3289.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_3291.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_3613.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_4459.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_4694.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_4788.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_4799.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5063.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5179.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5181.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5321.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5326.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5601.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5640.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5652.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_5662.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_6182.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_6183.JPG', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_8231.jpg', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_8236.jpg', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_8237.jpg', alt: 'Together Photo', tag: 'together' as Tag },
  { src: '/images/general/IMG_8466.jpg', alt: 'Together Photo', tag: 'together' as Tag },
]

export default function Gallery() {
  const [activeTag, setActiveTag] = useState<Tag>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeTag === 'all' ? photos : photos.filter(p => p.tag === activeTag)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null))

  const handleTagChange = (tag: Tag) => {
    setActiveTag(tag)
    setLightbox(null)
  }

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section__title">Photo Gallery</h2>
        <p className="section__subtitle">Memories we've made along the way</p>
        <div className="gallery__filters">
          {TAGS.map(tag => (
            <button
              key={tag.value}
              className={`gallery__filter${activeTag === tag.value ? ' gallery__filter--active' : ''}`}
              onClick={() => handleTagChange(tag.value)}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
      <div className="gallery__wide">
        <div className="gallery__grid">
          {filtered.map((photo, i) => (
            <button
              key={photo.src}
              className="gallery__item"
              onClick={() => setLightbox(i)}
              aria-label={`Open ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">›</button>
        </div>
      )}
    </section>
  )
}
