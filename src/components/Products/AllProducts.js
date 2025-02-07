import React from 'react'
import { products } from '../../utils/data'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'

const AllProducts = () => {
    return (
        <div className='grid grid-cols-2 gap-x-[52px] gap-y-10 w-[80%] max-w-max mx-auto mt-[150px] pb-[100px]'>
            {
                products.map((item) => (
                    <div className='flex flex-col gap-5 justify-between pt-5 pb-[32px] px-[66px] w-full max-w-[693px] bg-[#D9D9D9] rounded-[30px]'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-9'>
                                <img src={`/images/${item.icon}.svg`} alt={item.heading} className='w-[79px]' />
                                <h2 className="text-[#666666] text-4xl font-semibold font-['Lato']">{item.heading}</h2>
                            </div>
                            <p className=" text-[#666666] text-xl font-normal font-['Sans'] leading-normal">{item.text}</p>
                        </div>
                        <button className="mt-5 self-end justify-between w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] items-center inline-flex">
                            <span className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">
                                Get Started
                            </span>
                            <span ><FaArrowRightLong color='white' /></span>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts