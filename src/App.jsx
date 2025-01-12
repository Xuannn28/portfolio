/**
 * Portfolio
 * @author Goh Jia Xuan 
 * 
 * @description This is the main component that will be rendered by the index.js file. 
 * It contains all the other components that will be rendered on the page.
 */

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Highlight from './components/Highlight'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="w-full overflow-hidden bg-fixed bg-cover bg-center min-h-screen" style={{backgroundImage: 'url("./background.jpg")'}}>
      <Nav/>
      <Home/>
      <About/>
      <Highlight/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}``