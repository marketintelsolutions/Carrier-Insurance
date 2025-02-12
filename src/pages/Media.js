import React from 'react'
import Banner from '../components/Banner'
import MediaDetails from '../components/Media/MediaDetails'
import SectionSeven from '../components/Landing/SectionSeven'
import PressRelease from '../components/About/Blog'
import Blog from '../components/Media/Blog'

const Media = () => {
    return (
        <>
            <Banner image={'mediabanner'} />
            <MediaDetails />
            <SectionSeven />
            <PressRelease />
            <Blog />
        </>
    )
}

export default Media