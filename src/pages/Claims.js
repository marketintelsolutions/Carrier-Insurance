import React from 'react'
import Banner from '../components/Banner'
import ClaimsDetails from '../components/Claims/ClaimsDetails'
import SharedBanner from '../components/SharedBanner'
import ClaimsForm from '../components/Claims/ClaimsForm'

const Claims = () => {
    return (
        <>
            <SharedBanner
                img={'nightcity.jpg'}
                heading={"Our dedicated claims team is available to guide you through the entire process, from start to finish"}
                page={'claims'}
            />
            <ClaimsForm />
            <ClaimsDetails />
        </>
    )
}

export default Claims