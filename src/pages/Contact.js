import React from 'react'
import Banner from '../components/Banner'
import ContactDetails from '../components/Contact/ContactDetails'
import AboutBanner from '../components/About/AboutBanner'

const Contact = () => {
    return (
        <>
            {/* <Banner image={'contactbanner'} /> */}
            <AboutBanner />
            <ContactDetails />
        </>
    )
}

export default Contact