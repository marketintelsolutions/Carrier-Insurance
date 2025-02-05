import React from 'react'
import { team } from '../../utils/data'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const OurTeam = () => {

    return (
        <section id='team' className='relative pb-[80px]'>
            <div className='bg-[#EFEFEF] h-[20%] w-full absolute top-0 left-0 '></div>
            <div className='relative z-2 bg-[#E6E4E4] w-[80%] max-w-max mx-auto rounded-[30px] p-[120px]'>
                <h2 className="w-[301px] h-[83px] text-[#5a5a5a] text-5xl font-bold font-['Lato']">Our Team</h2>

                <div className='grid grid-cols-3 gap-x-[53px] gap-y-[124px]'>
                    {
                        team.map((item) => {
                            if (!item.slug) {
                                return (
                                    <div className='w-full relative'>
                                        <div className="absolute bottom-0 right-0 w-[529px] h-[397px] bg-[#cc1517] rounded-[50px]" >
                                            <img src="/images/hr.svg" alt="hr" />
                                        </div>
                                    </div>
                                )
                            }
                            return (
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
                            )
                        })
                    }
                </div>
            </div>

            <div className='mt-[180px] flex justify-between  items-center gap-10 bg-primaryRed py-[60px] px-[80px] w-[80%] max-w-max mx-auto rounded-[30px]'>
                <div>
                    <p className=" text-black/80 text-2xl font-normal font-['Montserrat'] leading-[50px]">Do you wish to be part of a forward looking team?</p>
                    <p className="">
                        <span className="text-[#fffefe] text-5xl font-bold font-['Montserrat'] leading-[50px]">Insurance </span>
                        <span className="text-black/80 text-5xl font-bold font-['Montserrat'] leading-[50px]">Claims Skills.</span>
                    </p>
                    <p className=" h-[47px] text-black/80 text-2xl font-normal font-['Montserrat'] leading-[50px]">Infinite possibilities. Endless opportunities.</p>
                </div>
                <div className='flex gap-[15px]'>
                    <button className="w-48 h-[52px] relative bg-[#fffefe] rounded-md">
                        <span className=" text-center text-[#cc1517] text-[17px] font-medium font-['Montserrat']">Join Today</span>
                    </button>
                    <button className="w-48 h-[52px] relative border rounded-md">
                        <span className=" text-center text-white text-[17px] font-medium font-['Montserrat']">Contact us</span>
                    </button>
                </div>
            </div>

            <div className='w-[70%] max-w-[1200px] mx-auto mt-[150px]'>
                <div className='flex gap-6'>
                    <div className='w-[45%]'>
                        <p className=" h-5 text-[#cc1517] text-xl font-semibold font-['Inter'] leading-tight">Blog</p>
                        <h2 className=" mt-[14px] text-[#282828] text-[42px] font-extrabold font-['Inter'] leading-[50.40px]">
                            Tips and advice on managing risks, choosing policies, and more.</h2>
                        <p className=" h-[78px] mt-[14px] text-[#1e1e1e] text-[17px] font-normal font-['Inter'] leading-relaxed">Tips and advice on managing risks, choosing policies, and more.</p>
                    </div>

                    <div className='w-[52%] flex gap-6'>
                        <div className="w-[288px] h-[279.72px] px-[30px] pt-[49px] pb-[58.34px] bg-[#cc1517] rounded-[30px] flex-col justify-center items-start  inline-flex">
                            <p className="self-stretch  text-white text-[23px] font-extrabold font-['Inter'] leading-7">Case Studies</p>
                            <p className="mt-3 mb-11 self-stretch  text-[#fffefe] text-[17px] font-normal font-['Inter'] leading-tight">Real-world examples of how we’ve supported clients with tailored insurance solutions.</p>
                            <div className="justify-center items-center gap-[15px] inline-flex">
                                <div className="text-center text-white text-base font-medium font-['Inter'] leading-none">Click here</div>
                                <span className="text-center text-white text-base font-black font-['Font Awesome 5 Free'] leading-none"><FaChevronRight /></span>
                            </div>
                        </div>
                        <div className='w-[288px] border h-[279.72px] rounded-[30px]'>
                            <img src="/images/planning.png" alt="planning" className='w-full h-full object-cover rounded-[30px]' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 mt-6'>
                    <div className='w-[45%]'>
                        <img src="/images/planningtwo.png" alt="planningtwo" className='w-full h-full object-cover rounded-[30px]' />
                    </div>

                    <div className='w-[52%] flex gap-6'>
                        <div className='w-[288px] border h-[279.72px] rounded-[30px]'>
                            <img src="/images/planningthree.png" alt="planning" className='w-full h-full object-cover rounded-[30px]' />
                        </div>
                        <div className="w-[288px] h-[279.72px] px-[30px] pt-[49px] pb-[58.34px] bg-[#cc1517] rounded-[30px] flex-col justify-center items-start  inline-flex">
                            <p className="self-stretch  text-white text-[23px] font-extrabold font-['Inter'] leading-7">Press Releases</p>
                            <p className="mt-3 mb-11 self-stretch  text-[#fffefe] text-[17px] font-normal font-['Inter'] leading-tight">Find official statements and announcements.</p>
                            <div className="justify-center items-center gap-[15px] inline-flex">
                                <div className="text-center text-white text-base font-medium font-['Inter'] leading-none">Click here</div>
                                <span className="text-center text-white text-base font-black font-['Font Awesome 5 Free'] leading-none"><FaChevronRight /></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam