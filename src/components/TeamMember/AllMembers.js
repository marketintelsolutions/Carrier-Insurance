import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { team } from '../../utils/data'

const AllMembers = ({ teammember }) => {

    return (
        <section className='bg-[#FFFEFE] pb-[300px]'>
            <div className='bg-[#E6E4E4] py-[65px] px-[105px] w-[80%] max-w-max mx-auto rounded-[30px]'>
                <div className='flex gap-x-[30px] '>
                    {
                        team.map((item) => {
                            if (!item.slug) {
                                return
                            }
                            return (
                                <div className={`shadow-[3px_6px_15px_0px_rgba(0,0,0,0.25)] rounded-[30px] ${teammember.slug === item.slug && 'opacity-30'}`}>
                                    <img src={`/images/${item.image}.png`} alt={item.name} className='object-cover ' />

                                    <div className="w-full px-[25px] py-[25px] bg-[#d9d9d9] rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-start gap-2.5 inline-flex">
                                        <div className=" w-full flex-col justify-start items-start gap-3 flex">
                                            <h3 className="h-[36px] text-[#1e1f21] text-[15.13px] font-bold font-['Lato'] tracking-tight">{item.name}</h3>
                                            <div className='h-[30px] w-full flex justify-between items-center' >
                                                <p className=" text-[#666666] text-[10.09px] font-normal font-sans">{item.title}</p>
                                                <Link to={`/about/team/${item.slug}`} className="w-[15px] h-[15px] pl-[5.63px] pr-[5.62px] py-[5px] bg-[#cc1517] rounded-[20px] text-[9px] justify-center items-center flex text-white">
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
        </section>
    )
}

export default AllMembers