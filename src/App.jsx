
import Header from "./component/header"
import Hero from "./component/hero"
import About from "./component/about"
import Facts from "./component/facts"
import Skill from "./component/skill"
import Portfolio from "./component/portfolio"

import Contact from "./component/contact"
import Footer from "./component/footer"
import Resume from "./component/resume"
import PortfolioIsotope from "./component/PortfolioIsotope"
import NavbarLinks from "./component/NavbarLinks"


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
        <PortfolioIsotope/>
        <NavbarLinks/>
        <Resume/>
        <Contact/>
      </main>
      
      <Footer/>
    </>
    
  )
}

export default App
