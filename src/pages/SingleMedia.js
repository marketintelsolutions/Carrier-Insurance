import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom'
import SingleMediaDetails from '../components/SingleMedia/SingleMediaDetails'
import Blog from '../components/Media/Blog'
import LeaveReply from '../components/SingleMedia/LeaveReply'

const SingleMedia = () => {
    const { id } = useParams()

    useEffect(() => {
        window.scroll(0, 0)
    }, [id])


    return (
        <>
            <Banner image={'mediabanner'} />
            <SingleMediaDetails />
            <Blog />
            <LeaveReply />
        </>
    )
}

export default SingleMedia