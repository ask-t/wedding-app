import { useState } from 'react'

// Wedding photos from engagement shoot and couple photos
const photos = [
  { src: '/images/engage-photo/Ask01-fix.jpg', thumb: '/images/engage-photo/Ask01-fix.jpg', alt: 'Engagement Photo 1' },
  { src: '/images/engage-photo/Ask09.jpg', thumb: '/images/engage-photo/Ask09.jpg', alt: 'Engagement Photo 2' },
  { src: '/images/engage-photo/Ask13.jpg', thumb: '/images/engage-photo/Ask13.jpg', alt: 'Engagement Photo 3' },
  { src: '/images/engage-photo/Ask16.jpg', thumb: '/images/engage-photo/Ask16.jpg', alt: 'Engagement Photo 4' },
  { src: '/images/engage-photo/Ask23.jpg', thumb: '/images/engage-photo/Ask23.jpg', alt: 'Engagement Photo 5' },
  { src: '/images/engage-photo/Ask35-fix.jpg', thumb: '/images/engage-photo/Ask35-fix.jpg', alt: 'Engagement Photo 6' },
  { src: '/images/engage-photo/Ask36-fix.jpg', thumb: '/images/engage-photo/Ask36-fix.jpg', alt: 'Engagement Photo 7' },
  { src: '/images/engage-photo/Ask38.jpg', thumb: '/images/engage-photo/Ask38.jpg', alt: 'Engagement Photo 8' },
  { src: '/images/engage-photo/Ask41.jpg', thumb: '/images/engage-photo/Ask41.jpg', alt: 'Engagement Photo 9' },
  { src: '/images/general/IMG_8231.jpg', thumb: '/images/general/IMG_8231.jpg', alt: 'Couple Photo 1' },
  { src: '/images/general/IMG_8236.jpg', thumb: '/images/general/IMG_8236.jpg', alt: 'Couple Photo 2' },
  { src: '/images/temple/IMG_1236.JPG', thumb: '/images/temple/IMG_1236.JPG', alt: 'Temple Photo 1' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null))

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section__title">Photo Gallery</h2>
        <p className="section__subtitle">Memories we've made along the way</p>
        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <button
              key={i}
              className="gallery__item"
              onClick={() => setLightbox(i)}
              aria-label={`Open ${photo.alt}`}
            >
              <img src={photo.thumb} alt={photo.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">›</button>
        </div>
      )}
    </section>
  )
}
