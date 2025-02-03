import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa6'

const SectionEight = () => {
    return (
        <section className='py-[120px] bg-[#666] '>
            <div className='w-[80%] max-w-max mx-auto rounded-[30px] bg-white py-[60px] flex flex-col items-center gap-[18px]'>
                <h2 className="text-[#cc1517] text-5xl font-bold font-['Lato']">Our Clients:</h2>
                <p className="text-center text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-tight">
                    A look at some of the individuals and businesses we’re proud to serve.
                </p>
                <div className='flex justify-between items-center gap-10'>
                    <span><FaChevronLeft /></span>
                    <img src="/images/walmart.svg" alt="walmart" />
                    <img src="/images/cisco.svg" alt="cisco" />
                    <img src="/images/volvo.svg" alt="volvo" />
                    <img src="/images/deloitte.svg" alt="deloitte" />
                    <img src="/images/okta.svg" alt="okta" />
                    <span><FaChevronRight /></span>
                </div>
            </div>

            <div className=' bg-[#F5F5F5] w-[80%] mt-[106px] max-w-max mx-auto rounded-[30px] px-[100px] pt-[130px] pb-[90px]'>
                <div className='relative'>
                    <h2 className="w-[184.39px] h-5 text-[#cc1517] text-xl font-semibold font-['Inter'] leading-tight">Testimonials</h2>
                    <p className="w-[509px] mt-[14px] text-[#282828] text-4xl font-extrabold font-['Inter'] leading-[42px]">Read what our clients have to say about working with Truebond Insurance Brokers Limited.</p>

                    <div className=' mt-[100px] py-[40px] px-[90px] bg-[#CC1517] rounded-[30px] max-w-[650px]'>
                        <p className="relative w-[443.46px] h-[104px] text-white text-base font-normal font-['Inter'] leading-relaxed">
                            Carrier Insurance has been incredibly reliable and transparent. They’ve made navigating my business insurance simple.
                            <span className='absolute -left-[37px] top-0 text-2xl'><FaQuoteLeft /></span>
                        </p>

                        <div className='flex justify-between items-end'>
                            <div className='flex gap-5 items-center'>
                                <div className='p-2 bg-white rounded-full'> <img src="/images/person.png" alt="person" className='object-cover' /></div>
                                <div>
                                    <p className="w-[122.14px] h-[22px] text-white text-xl font-semibold font-['Inter'] leading-snug">YYYY</p>
                                    <p className="mt-1 w-[116.83px] h-[17.60px] text-white text-base font-semibold font-['Inter'] leading-[17.60px]">YYYY</p>
                                </div>
                            </div>

                            <div className='flex gap-1.5'>
                                <span className='inline-flex p-3 bg-white rounded-full text-[12px]'><FaChevronLeft /></span>
                                <span className='inline-flex p-3 bg-white rounded-full text-[12px]'><FaChevronRight /></span>
                            </div>
                        </div>
                    </div>
                    <img src="/images/menbig.png" alt="menbig" className='absolute right-0 top-[0px] w-[50%]  max-w-[529px]' />
                </div>
            </div>
        </section>
    )
}

export default SectionEight