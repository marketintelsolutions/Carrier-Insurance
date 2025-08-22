import React from 'react'
import { team } from '../../utils/data'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SlideIn from '../SlideIn'
import Blog from './Blog'

const OurTeam = () => {

    return (
        <section className='relative pb-[80px] px-6 xl:px-0'>
            <div className='bg-[#EFEFEF] h-[20%] w-full absolute top-0 left-0 '></div>
            <div className='relative z-2 bg-[#E6E4E4] md:w-[80%] max-w-max mx-auto rounded-[30px] p-6 py-10 lg:p-[120px]'>
                <SlideIn duration={700} distance={50} direction="left" delay={100}>
                    <h2 className="w-[301px] h-[83px] text-[#5a5a5a] text-3xl md:text-5xl font-bold font-['Lato']">Our Team</h2>
                </SlideIn>

                <div id='team' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[53px] gap-20 lg:gap-y-[124px]'>
                    {
                        team.map((item, index) => {
                            if (!item.slug) {
                                return (
                                    <SlideIn
                                        key={index}
                                        duration={700}
                                        distance={60}
                                        direction="bottom"
                                        delay={300 + (index * 150)}
                                    >
                                        <div className='w-full relative'>
                                            <div className="absolute bottom-0 right-0 w-[529px] h-[397px] bg-[#cc1517] rounded-[50px]" >
                                                <img src="/images/hr.svg" alt="hr" />
                                            </div>
                                        </div>
                                    </SlideIn>
                                )
                            }
                            return (
                                <SlideIn
                                    key={index}
                                    duration={700}
                                    distance={60}
                                    direction="bottom"
                                    delay={300 + (index * 150)}
                                >
                                    <div className=' shadow-[3px_6px_15px_0px_rgba(0,0,0,0.25)] rounded-[50px]'>
                                        <img src={`/images/${item.image}.png`} alt={item.name} className='object-cover ' />

                                        <div className="w-full px-[35px] py-[25px] bg-[#d9d9d9] rounded-bl-[50px] rounded-br-[50px] flex-col justify-start items-start gap-2.5 inline-flex">
                                            <div className="min-h-[100px] w-full flex-col justify-start items-start gap-3 flex">
                                                <h3 className=" text-[#1e1f21] text-2xl font-bold font-['Lato'] tracking-tight">{item.name}</h3>
                                                <div className='h-[30px] w-full flex justify-between items-center' >
                                                    <p className=" text-[#666666] text-base font-normal font-['Sans']">{item.title}</p>
                                                    <Link to={`/about/team/${item.slug}`} className="w-[30px] h-[30px] pl-[15.63px] pr-[15.62px] py-[13px] bg-[#cc1517] rounded-[20px] justify-center items-center flex text-white">
                                                        <span><FaChevronRight /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SlideIn>
                            )
                        })
                    }
                </div>
            </div>

            <SlideIn duration={800} distance={50} direction="bottom" delay={1000}>
                <div className='my-20 md:my-[180px] flex flex-wrap lg:flex-nowrap justify-between items-center gap-10 bg-primaryRed py-[60px] px-4 md:px-[80px] md:w-[80%] max-w-max mx-auto rounded-[30px]'>
                    <div>
                        <p className=" text-black/80 text-[18px] md:text-[22px] font-normal font-['Montserrat'] md:leading-[50px]">Do you wish to be part of a forward looking team?</p>
                        <p className="">
                            <span className="text-[#fffefe] text-[30px] md:text-[44px] font-bold font-['Montserrat'] md:leading-[50px]">Insurance </span>
                            <span className="text-black/80 text-[30px] md:text-[44px] font-bold font-['Montserrat'] md:leading-[50px]">Claims Skills.</span>
                        </p>
                        <p className=" md:h-[47px] text-black/80 text-lg md:text-2xl font-normal font-['Montserrat'] md:leading-[50px]">Infinite possibilities. Endless opportunities.</p>
                    </div>
                    <div className='flex flex-wrap md:flex-wrap gap-[15px]'>
                        <Link to={'/claims'} className="w-full md:w-48 h-[52px] flex justify-center items-center relative text-[#cc1517] hover:text-white hover:bg-primaryRed border border-white bg-[#fffefe] rounded-md">
                            <span className=" text-center  text-[17px] font-medium font-['Montserrat']">Join Today</span>
                        </Link>
                        <Link to={'/contact'} className="w-full md:w-48 h-[52px] flex justify-center items-center text-white  hover:bg-primaryBlue relative border rounded-md">
                            <span className=" text-center text-[17px] font-medium font-['Montserrat']">Contact us</span>
                        </Link>
                    </div>
                </div>
            </SlideIn>

            {/* <Blog /> */}
        </section>
    )
}

export default OurTeam