import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Links from './Links'

const MainLayout = ({ children }) => {
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