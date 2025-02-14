import React from 'react'
import Banner from '../components/Banner'
import QuoteDetails from '../components/Quote/QuoteDetails'
import LeaveReply from '../components/SingleMedia/LeaveReply'

const Quote = () => {
    return (
        <>
            <Banner image={'mediabanner'} />
            <QuoteDetails />
            <LeaveReply />

        </>
    )
}

export default Quote