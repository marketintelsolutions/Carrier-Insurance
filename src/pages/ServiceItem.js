import React, { useEffect } from 'react'
import ServiceItemBanner from '../components/Services/ServiceItemBanner'
import ServiceItemDetails from '../components/Services/ServiceItemDetails'
import { useParams } from 'react-router-dom'
import { services } from '../utils/data'
import AllServices from '../components/Services/AllServices'

const ServiceItem = () => {
    const { id } = useParams()

    const serviceItem = services.find((item) => item.slug === id)

    useEffect(() => {
        window.scroll(0, 0)
    }, [id])

    return (
        <>
            <ServiceItemBanner serviceItem={serviceItem} />
            <ServiceItemDetails serviceItem={serviceItem} />
            <AllServices />
        </>
    )
}

export default ServiceItem