import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme';

function App() {
  const [dark, toggleTheme] = useTheme();

  return (
    <>
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App