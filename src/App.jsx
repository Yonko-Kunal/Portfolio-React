import React from 'react'
import Navebar from './Components/Navbar/Navebar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'

const App = () => {
    return (
        <div>
            <Navebar />
            <Hero />
            <About />
            <Project />
            <Contact />
        </div>
    )
}

export default App