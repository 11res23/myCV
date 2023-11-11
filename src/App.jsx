import Header from "./component/header"
import Hero from "./component/hyro"
import About from "./component/about"
import Facts from "./component/facts"
import Skill from "./component/skill"
import Portfolio from "./component/portfolio"

import Contact from "./component/contact"
import Footer from "./component/footer"
import Resume from "./component/resume"

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
        <Resume/>
        
        
        <Contact/>
      </main>
      <Footer/>
    </>
    
  )
}

export default App
