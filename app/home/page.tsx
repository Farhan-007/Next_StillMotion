import React from 'react'
import Category from './category'
import Contact from './contact'
import Feature from './feature'
import Hero from './hero'
import Services from './services'


function HomePage() {
    return (
        <>
            <Hero />
            <Feature />
            <Services />
            <Category />
            <Contact />
        </>
    )
}

export default HomePage
