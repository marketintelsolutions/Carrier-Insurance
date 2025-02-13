import React from 'react'
import { FaArrowRight, FaChevronRight, FaFacebook, FaInstagram, FaLocationDot, FaTwitter } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import { PiPhoneCallFill } from 'react-icons/pi'
import BannerAnimation from './BannerAnimation'

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b pb-[140px] from-[#666] to-[#CCC] '>
            <div className='bg-[#D9D9D9] flex py-6 px-[40px] justify-between items-center rounded-[30px] w-[75%] max-w-[1248px] translate-y-[50px] mx-auto '>
                <div className='flex flex-col gap-4 px-[50px] items-center'>
                    <span className='text-[45px] text-primaryRed'><FaLocationDot /></span>
                    <p className="h-[45px] text-center text-black text-[14px] font-normal font-sans leading-tight tracking-tight">Plot 22, Akiogun New Market Road, <br />Oniru Victoria Island, Lagos</p>
                </div>

                <div className=' h-[139px] w-0.5  bg-[#666666]'></div>

                <div className='flex flex-col gap-4 px-[50px]  items-center'>
                    <span className='text-[45px]  text-primaryRed'><IoMail /></span>
                    <p className="h-[45px] text-center text-black text-[14px] font-normal font-sans leading-tight tracking-tight">
                        it-@carrierinsurancebrokers.com,
                        <br />it-@carrierinsurancebrokers.com</p>
                </div>

                <div className=' h-[139px] w-0.5  bg-[#666666]'></div>
                <div className='flex flex-col gap-4 px-[50px] items-center'>
                    <span className='text-[45px]  text-primaryRed'><PiPhoneCallFill /></span>
                    <p className="h-[45px] text-center text-black text-[14px] font-normal font-sans leading-tight tracking-tight">+234 906 297 9782   |  +234 906 297 9786 <br />+234 906 244 7811   |  +234 707 452 1825</p>
                </div>
            </div>
            <div className='w-[80%] max-w-max mx-auto  gap-[60px] bg-black px-[46px] pt-[130px] pb-12 rounded-[30px]'>
                <div className='flex justify-between gap-[50px]'>
                    <div className='flex flex-col justify-between'>
                        <img src="/images/whitelogo.svg" alt="logo" />
                        <BannerAnimation size={294} />
                    </div>
                    <div>
                        <h2 className="pb-[15px] mb-5 border-b border-white w-[143.09px] text-[#fffefe] text-2xl font-bold font-['Lato'] tracking-tight">Useful Links</h2>
                        <div className='flex flex-col gap-2.5'>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Home</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">About Us</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Products</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">FAQ</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Careers</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Contact Us</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Media</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-[15px] mb-5 border-b border-white w-[143.09px] text-[#fffefe] text-2xl font-bold font-['Lato'] tracking-tight">Our Services</h2>
                        <div className='flex flex-col gap-2.5'>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Motor Insurance Policy</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Fire and Burglary Policy</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Group Life Insurance</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Fidelity Guarantee Policy</p>
                            </div>
                            <div className="h-[30px] justify-start items-baseline gap-5 inline-flex">
                                <span className="text-white text-base font-black font-['Font Awesome 5 Free'] leading-[30px]">
                                    <FaChevronRight size={11} />
                                </span>
                                <p className="text-[#f8f8f8] text-base font-normal font-sans leading-tight tracking-tight">Household Insurance</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h2 className="h-[26.40px] text-[#fffefe] text-2xl font-bold font-['Lato'] tracking-tight">Subscribe </h2>
                        <p className="mt-1 h-[53px] text-[#999999] text-base font-normal font-sans leading-relaxed">Sign up for our weekly newsletter.</p>
                        <div className=" h-14  bg-white rounded-[35px] justify-between items-start inline-flex overflow-hidden">
                            <input className="self-stretch focus:outline-none pl-[25px] py-5 text-[#666666] text-base font-normal font-sans leading-tight tracking-tight" placeholder='Your email address' />
                            <button className='bg-primaryRed rounded-full h-full pl-[18px] pr-[7px] inline-flex items-center gap-[14px]'>
                                <span className="text-white text-base font-normal font-sans leading-tight tracking-tight">Send</span>
                                <span className='bg-white text-primaryRed p-3 rounded-full'><FaArrowRight /></span>
                            </button>
                        </div>
                    </div>

                </div>
                <p className="mt-[70px] text-[#999999] text-base font-normal font-sans leading-tight tracking-tight">Designed & developed by Ziltchone Technology </p>

                <div className='mt-[24px] border-t-4 border-primaryRed pt-[22px] flex justify-between'>
                    <p className="text-[#fffefe] text-base font-normal font-sans leading-relaxed">© Truebond Insurance Brokers Limited 2024. All Right Reserved.</p>
                    <div className='flex gap-[38px] text-white text-2xl'>
                        <span><FaInstagram /></span>
                        <span><FaTwitter /></span>
                        <span><FaFacebook /></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer