import React from 'react'

const ServiceItemDetails = ({ serviceItem }) => {
    return (
        <section className='w-[55%] max-w-[896px] mx-auto pt-[256px] pb-[150px]'>
            <h1 className="text-[#666666] text-6xl font-bold font-['Montserrat'] leading-[72px]">{serviceItem.heading}</h1>
            <div className='flex gap-1 mt-[15px]'>
                <span className='inline-flex h-[6.6px] w-[143px] bg-primaryRed'></span>
                <span className='inline-flex h-[6.6px] w-[30px] bg-[#5A5A5A]'></span>
            </div>

            <div className="mt-10 opacity-40 [&>h2]:font-bold text-[#191a1c] text-2xl font-normal font-['Inter'] leading-[30px]" dangerouslySetInnerHTML={{ __html: serviceItem.details }}></div>

            <button className="mt-[95px] h-[46px] px-[35px] py-2.5 bg-[#5a5a5a] justify-center items-start inline-flex">
                <div className="text-center">
                    <span className="text-[#fffefe] text-base font-medium font-['Inter'] leading-relaxed">Get Quote </span>
                </div>
            </button>

        </section>
    )
}

export default ServiceItemDetails