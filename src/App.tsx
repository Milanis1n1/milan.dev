import Layout from '@/components/layout/Layout'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Education from '@/sections/Education'
import Contact from '@/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  )
}

export default App
