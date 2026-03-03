import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Events from './components/Events'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import ComingSoon from './components/ComingSoon'

function HomePage() {
  return (
    <main>
      <Hero />
      <Events />
      <Registry />
      <RSVP />
    </main>
  )
}

function StoryPage() {
  return (
    <main>
      <ComingSoon title="Our Story" subtitle="How it all began" />
    </main>
  )
}

function GalleryPage() {
  return (
    <main>
      <ComingSoon title="Photo Gallery" subtitle="Memories we've made along the way" />
    </main>
  )
}

function ProgramPage() {
  return (
    <main>
      <ComingSoon title="Wedding Reception Program" subtitle="The celebration details" />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/program" element={<ProgramPage />} />
      </Routes>
      <Footer />
    </>
  )
}
