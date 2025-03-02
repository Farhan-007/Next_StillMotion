import React from 'react'
// import Category from './category'
// import Contact from './contact'
// import Feature from './feature'
// import Hero from './hero'
// import Services from './services'
import Hero from './hero'
import Feature from './feature'
// import Feature from './feature2'
import Services from './services'
import Category from './category'
import Contact from './contact'
import Packages from './packages'

function HomePage() {
    return (
        <>
            <Hero />
            <Feature />
            <Services />
            {/* <Packages /> */}
            {/* <Team /> */}
            <Category />
            <Contact />
        </>
    )
}

export default HomePage
