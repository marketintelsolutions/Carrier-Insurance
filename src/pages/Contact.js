import React from 'react'
import Banner from '../components/Banner'
import ContactDetails from '../components/Contact/ContactDetails'
import AboutBanner from '../components/About/AboutBanner'
import SharedBanner from '../components/SharedBanner'

const Contact = () => {
    return (
        <>
            <SharedBanner
                img={'nightcity.jpg'}
                heading={"Get in touch with Truebond Insurance Brokerage Limited for any inquiries, consultations, or support"}
                page={'Contact us'}
            />
            <ContactDetails />
        </>
    )
}

export default Contact