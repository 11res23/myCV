import Header from "./component/header"
import Hero from "./component/hyro"
import About from "./component/about"
import Facts from "./component/facts"
import Skill from "./component/skill"
import Portfolio from "./component/portfolio"
import Testimonials from "./component/testimonials"
import Contact from "./component/contact"
import Footer from "./component/footer"
function App() {


  return (
    <>
    <Header />
    <Hero />
      <main id="main">
        <About />
        <Facts/>
        <Skill/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </>
    
  )
}

export default App
