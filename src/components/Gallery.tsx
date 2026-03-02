import { useState } from 'react'

// Placeholder photos using picsum — replace with real photo URLs
const photos = [
  { src: 'https://picsum.photos/seed/wedding1/800/600', thumb: 'https://picsum.photos/seed/wedding1/400/300', alt: 'Photo 1' },
  { src: 'https://picsum.photos/seed/wedding2/800/600', thumb: 'https://picsum.photos/seed/wedding2/400/300', alt: 'Photo 2' },
  { src: 'https://picsum.photos/seed/wedding3/600/800', thumb: 'https://picsum.photos/seed/wedding3/300/400', alt: 'Photo 3' },
  { src: 'https://picsum.photos/seed/wedding4/800/600', thumb: 'https://picsum.photos/seed/wedding4/400/300', alt: 'Photo 4' },
  { src: 'https://picsum.photos/seed/wedding5/800/600', thumb: 'https://picsum.photos/seed/wedding5/400/300', alt: 'Photo 5' },
  { src: 'https://picsum.photos/seed/wedding6/600/800', thumb: 'https://picsum.photos/seed/wedding6/300/400', alt: 'Photo 6' },
  { src: 'https://picsum.photos/seed/wedding7/800/600', thumb: 'https://picsum.photos/seed/wedding7/400/300', alt: 'Photo 7' },
  { src: 'https://picsum.photos/seed/wedding8/800/600', thumb: 'https://picsum.photos/seed/wedding8/400/300', alt: 'Photo 8' },
  { src: 'https://picsum.photos/seed/wedding9/600/800', thumb: 'https://picsum.photos/seed/wedding9/300/400', alt: 'Photo 9' },
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
