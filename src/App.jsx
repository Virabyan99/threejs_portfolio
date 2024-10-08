// import About from './sections/About'
// import Hero from './sections/Hero'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Navbar from './sections/Navbar'
// import Projects from './sections/Projects'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      {/* <Hero/>
      <About/>
      <Projects/> */}
      <Clients/>
      <Contact/>
    </main>
  )
}

export default App
