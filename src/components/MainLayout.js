import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Links from './Links'

const MainLayout = ({ children }) => {
    const { pathname } = window.location

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Links />
        </>
    )
}

export default MainLayout