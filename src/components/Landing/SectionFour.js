import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { services } from '../../utils/data'
import { Link, useParams } from 'react-router-dom'

const SectionFour = () => {
    const { id } = useParams()

    return (
        <section className=' bg-[#F5F5F5] px-6 xl:px-0 pt-20 pb-40'>
            <div className='relative bg-black py-10 md:py-20 px-6 md:px-10 rounded-[15px] md:w-[85%] max-w-max mx-auto flex flex-col items-center'>
                {/* <h2 className="w-[125.52px] h-5 text-center text-[#CC1517] text-xl font-semibold font-['Inter'] leading-tight">Our Services</h2> */}
                <h1 className="mt-5  h-12 text-center text-white text-2xl md:text-4xl font-extrabold font-['Inter'] md:leading-[48px]">Insurance Industry and Their Products </h1>

                <div className='w-full flex flex-wrap gap-4 justify-center mt-[55px]'>
                    {
                        services.map((item, index) => (
                            <div key={index} className={`md:w-[268px] w-full flex flex-col bg-[#F5F5F5] rounded-[15px] pt-[50px] px-[30px] pb-5 ${item.slug === id && 'opacity-60'}`} >
                                <div className='relative'>
                                    <div className='h-[90px] w-[90px] absolute -top-5 -left-5 rounded-full bg-[#EBEBEB]'></div>
                                    <img src={`/images/${item.icon}.png`} alt={item.icon} className='w-full max-w-[72px] h-[65px] object-contain relative z-1' />
                                </div>
                                <p className="mt-5 mb-[30px] h-[87px] max-w-[103px] text-[#282828] text-xl font-bold font-['Inter'] leading-7 ">{item.heading}</p>
                                <Link to={`/services/${item.slug}`}
                                    className='w-10 h-10 items-center justify-center bg-primaryRed rounded-full inline-flex text-white'>
                                    <FaChevronRight size={12} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionFour