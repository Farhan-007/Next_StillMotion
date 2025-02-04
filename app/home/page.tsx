import React from 'react'
import Category from './category'
import Contact from './contact'
import Hero from './hero'
import Services from './services'
import { Feature } from './feature'


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
