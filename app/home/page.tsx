import React from 'react'
import Category from './category'
import Contact from './contact'
import Feature from './feature'
import Hero from './hero'

import Team from '../about/team'
import Services from './services'
import Packages from './packages'

function HomePage() {
    return (
        <>
            <Hero />
            <Feature />
            <Services />
            {/* <Packages /> */}
            <Category />
            {/* <Team /> */}
            <Contact />


        </>
    )
}

export default HomePage
