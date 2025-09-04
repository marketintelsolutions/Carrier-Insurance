import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import SectionTwo from '../components/About/SectionTwo'
import OurTeam from '../components/About/OurTeam'
import Testimonials from '../components/About/Testimonials'
import Portfolio from '../components/About/Portfolio'
import SharedBanner from '../components/SharedBanner'

const About = () => {
    return (
        <>
            {/* <AboutBanner /> */}
            <SharedBanner
                img={'nightcity'}
                heading={'We specialize in providing comprehensive insurance solutions '}
                page={'ABOUT'}
            />
            <SectionTwo />
            <OurTeam />
            {/* <Testimonials /> */}
            {/* <Portfolio /> */}
        </>
    )
}

export default About