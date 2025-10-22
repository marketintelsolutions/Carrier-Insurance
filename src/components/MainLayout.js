import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Links from './Links'
import { FaChevronUp } from 'react-icons/fa6'

const MainLayout = ({ children }) => {
    const [showScrollButton, setShowScrollButton] = useState(false)
    const [prevScrollY, setPrevScrollY] = useState(0)

    const { pathname } = window.location

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show button when scrolling up and not at top
            if (currentScrollY < prevScrollY && currentScrollY > 300) {
                setShowScrollButton(true)
            } else {
                setShowScrollButton(false)
            }

            setPrevScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollY])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Links />
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className='z-[999999] p-3 rounded-full text-2xl text-white fixed bottom-10 md:bottom-20 right-6 md:right-20 bg-primaryRed transition-opacity duration-300 hover:bg-opacity-90'
                >
                    <FaChevronUp />
                </button>
            )}
        </>
    )
}

export default MainLayout