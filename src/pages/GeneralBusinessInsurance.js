import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import GeneralBusinessInsuranceContent from '../components/Services/GeneralBusinessInsuranceContent'
import SharedBanner from '../components/SharedBanner'

const GeneralBusinessInsurance = () => {
    return (
        <>
            <SharedBanner
                img={'generalinsurance'}
                heading={'Comprehensive protection for individuals and corporations'}
                page={'General Business Insurance'}
            />
            <GeneralBusinessInsuranceContent />
        </>
    )
}

export default GeneralBusinessInsurance