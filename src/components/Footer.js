import React, { useState } from 'react'
import { FaArrowRight, FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaTwitter } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import { PiPhoneCallFill } from 'react-icons/pi'
import BannerAnimation from './BannerAnimation'
import { Link } from 'react-router-dom'
import { services } from '../utils/data'

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [subscriptionStatus, setSubscriptionStatus] = useState(''); // 'success' or 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribe = async () => {
        if (!email.trim()) {
            setErrorMessage('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setIsSubscribing(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://api.useplunk.com/v1/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_PLUNK_API_KEY}`
                },
                body: JSON.stringify({
                    to: process.env.REACT_APP_SUBMISSION_EMAIL,
                    subject: 'New Newsletter Subscription',
                    body: `
                        <h2>New Newsletter Subscription</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
                    `
                })
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe');
            }

            setSubscriptionStatus('success');
            setEmail('');

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSubscriptionStatus('');
            }, 3000);

        } catch (error) {
            console.error('Subscription error:', error);
            setSubscriptionStatus('error');
            setErrorMessage('Failed to subscribe. Please try again.');

            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubscriptionStatus('');
                setErrorMessage('');
            }, 5000);
        } finally {
            setIsSubscribing(false);
        }
    };

    return (
        <footer className='bg-gradient-to-b md:pb-[140px] from-[#666] to-[#CCC] '>
            <div className='bg-[#D9D9D9] hidden lg:flex  py-6 px-[40px] justify-between items-center rounded-[30px] w-[75%] max-w-[1248px] translate-y-[50px] mx-auto '>
                <div className='flex flex-col gap-4 px-[50px] items-center'>
                    <span className='text-[45px] text-primaryRed'><FaLocationDot /></span>
                    <p className="h-[45px] text-center text-black text-[14px] font-normal font-sans leading-tight tracking-tight">Plot 22, Akiogun Road, New Market Road, <br />Oniru, Victoria Island, Lagos</p>
                </div>

                <div className=' h-[139px] w-0.5  bg-[#666666]'></div>

                <div className='flex flex-col gap-4 px-[50px]  items-center'>
                    <span className='text-[45px]  text-red-600'><IoMail /></span>
                    <p className="h-[45px] text-center text-black text-[14px] font-normal font-sans leading-tight tracking-tight">
                        enquiry@truebondinsurancebrokers.com,
                        <br />
                        info@truebondinsurancebrokers.com,
                        <br />
                        it@truebondinsurancebrokers.com
                    </p>
                </div>

                <div className=' h-[139px] w-0.5  bg-[#666666]'></div>
                <div className='flex flex-col gap-4 px-[50px] items-center'>
                    <span className='text-[45px]  text-red-600'><PiPhoneCallFill /></span>
                    <p className="h-[45px] text-center text-black text-[14px] font-normal font-sans leading-tight tracking-tight">+234 906 297 9782   |  +234 906 297 9786 <br />+234 906 244 7811   |  +234 707 452 1825</p>
                </div>
            </div>
            <div className='md:w-[90%] max-w-max mx-auto  gap-[60px] bg-black px-6 md:px-[46px] pt-[130px] pb-12 md:rounded-[30px]'>
                <div className='flex flex-wrap lg:justify-between gap-[50px]'>
                    <div className='flex flex-col justify-between'>
                        <img src="/images/whitelogo.svg" alt="logo" className='max-w-[200px]' />
                        <BannerAnimation size={294} />
                    </div>
                    <div>
                        <h2 className="pb-[15px] mb-5 border-b border-white w-[143.09px] text-[#fffefe] text-xl md:text-2xl font-bold font-['Lato'] tracking-tight">Useful Links</h2>
                        <div className='flex flex-col gap-2.5'>
                            <Link to={'/'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">Home</p>
                            </Link>
                            <Link to={'/about'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">About Us</p>
                            </Link>
                            <Link to={'/products'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">Products</p>
                            </Link>
                            <Link to={'/faq'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">FAQ</p>
                            </Link>
                            <Link to={'/careers'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">Careers</p>
                            </Link>
                            <Link to={'/contact'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">Contact Us</p>
                            </Link>
                            <Link to={'/media'} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">Media</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-[15px] mb-5 border-b border-white w-[143.09px] text-[#fffefe] text-xl md:text-2xl font-bold font-['Lato'] tracking-tight">Our Services</h2>
                        <div className='flex flex-col gap-3'>
                            {
                                services.map((item, index) => (
                                    <Link key={index} to={`/services/${item.slug}`} className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                        <span className="text-white text-sm md:text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                            <FaChevronRight size={11} />
                                        </span>
                                        <p className="text-[#f8f8f8] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">{item.heading}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h2 className="h-[26.40px] text-[#fffefe] text-xl md:text-2xl font-bold font-['Lato'] tracking-tight">Subscribe</h2>
                        <p className="mt-1 h-[53px] text-[#999999] text-sm md:text-base font-normal font-sans leading-relaxed">Sign up for our weekly newsletter.</p>

                        {/* Success Message */}
                        {subscriptionStatus === 'success' && (
                            <div className="mb-3 p-2 bg-green-600 text-white text-sm rounded">
                                Successfully subscribed to our newsletter!
                            </div>
                        )}

                        {/* Error Message */}
                        {(subscriptionStatus === 'error' || errorMessage) && (
                            <div className="mb-3 p-2 bg-red-600 text-white text-sm rounded">
                                {errorMessage || 'Something went wrong. Please try again.'}
                            </div>
                        )}

                        <div className="h-14 bg-white rounded-[35px] justify-between items-start inline-flex overflow-hidden">
                            <input
                                className="self-stretch focus:outline-none pl-[25px] py-5 text-[#666666] text-sm md:text-base font-normal font-sans leading-tight tracking-tight flex-1"
                                placeholder='Your email address'
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage(''); // Clear error when typing
                                }}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                                disabled={isSubscribing}
                            />
                            <button
                                className={`rounded-full h-full pl-[18px] pr-[7px] inline-flex items-center gap-[14px] transition-colors ${isSubscribing
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-600 hover:bg-red-700'
                                    }`}
                                onClick={handleSubscribe}
                                disabled={isSubscribing}
                            >
                                <span className="text-white text-sm md:text-base font-normal font-sans leading-tight tracking-tight">
                                    {isSubscribing ? 'Sending...' : 'Send'}
                                </span>
                                <span className='bg-white text-red-600 p-3 rounded-full'>
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="mt-[70px] text-[#999999] text-sm md:text-base font-normal font-sans leading-tight tracking-tight">Designed & developed by Ziltchone Technology </p>

                <div className='mt-[24px] border-t-4 border-red-600 pt-[22px] flex flex-wrap lg:flex-nowrap gap-5 justify-between'>
                    <p className="text-[#fffefe] text-sm md:text-base font-normal font-sans leading-relaxed">© Truebond Insurance Brokers Limited {new Date().getFullYear()}. All Right Reserved.</p>
                    <div className='flex gap-[38px] text-white text-xl md:text-2xl'>
                        <a href='https://www.linkedin.com/posts/truebond-insurance-brokers-limited-13904a347_our-job-at-truebond-insurance-brokers-limited-activity-7359216834753052674-C9mC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFaueD0BQEPIu9GzjzmDM1V20qdiPMxKGGk' target='_blank'><FaLinkedin /></a>
                        <a
                            href='https://www.instagram.com/p/DMxeWN6seTw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer