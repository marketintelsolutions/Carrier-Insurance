import React from 'react'
import Banner from '../components/Banner'
import MediaDetails from '../components/Media/MediaDetails'
import SectionSeven from '../components/Landing/SectionSeven'
import Blog from '../components/About/Blog'

const Media = () => {
    return (
        <>
            <Banner image={'mediabanner'} />
            <MediaDetails />
            <SectionSeven />
            <Blog />
        </>
    )
}

export default Media