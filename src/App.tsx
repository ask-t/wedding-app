import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Events />
        <Gallery />
        <Registry />
        <RSVP />
      </main>
      <Footer />
    </>
  )
}
