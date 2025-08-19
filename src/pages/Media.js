import React from 'react'
import Banner from '../components/Banner'
import MediaDetails from '../components/Media/MediaDetails'
import SectionSeven from '../components/Landing/SectionSeven'
import PressRelease from '../components/About/Blog'
import Blog from '../components/Media/Blog'
import AboutBanner from '../components/About/AboutBanner'
import SharedBanner from '../components/SharedBanner'

const Media = () => {
    return (
        <>
            <SharedBanner
                img={'nightcity.jpg'}
                heading={"Stay informed with the latest updates and insights"}
                page={'Media'}
            />
            <MediaDetails />
            {/* <SectionSeven /> */}
            {/* <PressRelease /> */}
            {/* <Blog /> */}
        </>
    )
}

export default Media