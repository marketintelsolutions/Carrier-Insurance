import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import SectionTwo from '../components/Landing/SectionTwo'
import OurTeam from '../components/About/OurTeam'
import Testimonials from '../components/About/Testimonials'
import Portfolio from '../components/About/Portfolio'

const About = () => {
    return (
        <>
            <AboutBanner />
            <SectionTwo />
            <OurTeam />
            <Testimonials />
            <Portfolio />
        </>
    )
}

export default About