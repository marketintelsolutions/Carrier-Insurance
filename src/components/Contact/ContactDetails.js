import React from 'react'
import { FaArrowRight, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { IoMailOpenOutline } from 'react-icons/io5'

const ContactDetails = () => {
    return (
        <section className='md:w-[85%] px-6 xl:px-0 max-[1480px] mx-auto mt-[95px] pb-[140px]'>
            <div className='px-[37px] mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-[30px]'>
                <div>
                    <h2 className="text-[#cc1517] text-4xl md:text-5xl font-extrabold font-['Inter'] leading-[57.60px]">Contact Us</h2>
                    <p className="mt-10 md:w-[455px]">
                        <span className="text-[#060606] text-sm md:text-base font-light font-['Inter'] leading-relaxed">Get in touch with  </span>
                        <span className="text-[#060606] text-sm md:text-base font-bold font-['Inter'] leading-relaxed">
                            Truebond Insurance Brokerage Limited{" "}</span>
                        <span className="text-[#060606] text-sm md:text-base font-light font-['Inter'] leading-relaxed">
                            for any inquiries, consultations, or support. We’re here to assist you with all your insurance needs.
                        </span>
                    </p>

                    <div className='mt-6 px-6 flex flex-col gap-4'>
                        <div className='flex gap-[30px]'>
                            <span className='inline-flex h-fit px-3 py-2 bg-[#666] text-white text-[24px]'><FaLocationDot /></span>
                            <p className="text-[#666666] text-sm md:text-base font-normal font-['Sans'] leading-tight tracking-wide">Plot 22, Akiogun New Market Road, <br />Oniru Victoria Island, Lagos</p>
                        </div>
                        <div className='flex gap-[30px]'>
                            <span className='inline-flex h-fit px-3 py-2 bg-[#666] text-white text-[24px]'><IoMailOpenOutline /></span>
                            <p className="text-[#666666] text-sm md:text-base font-normal font-['Sans'] leading-tight tracking-wide">info@carrierinsurancebrokers.com, <br />
                                it-@carrierinsurancebrokers.com</p>
                        </div>
                        <div className='flex gap-[30px]'>
                            <span className='inline-flex h-fit px-3 py-2 bg-[#666] text-white text-[24px]'><FaPhoneVolume /></span>
                            <p className="text-[#666666] text-sm md:text-base font-normal font-['Sans'] leading-tight tracking-wide">
                                +234 906 297 9782   |  +234 906 297 9786
                                <br />
                                +234 906 244 7811    | +234 707 452 1825
                            </p>
                        </div>

                    </div>
                    <p className='mt-6'>
                        <span class="text-[#060606] text-sm md:text-base font-bold font-['Inter'] leading-relaxed">Business Hours: </span>
                        <span class="text-[#060606] text-sm md:text-base font-light font-['Inter'] leading-relaxed">8am-6pm</span>
                    </p>
                </div>
                <div>
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
            <div className='mt-[52px] justify-between w-full  flex flex-wrap md:flex-nowrap gap-5'>
                <div className='relative'>
                    <img src="/images/woman.png" alt="woman" className='' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[#cc15188e] rounded-[30px]'></div>
                </div>

                <div className='flex flex-col justify-between gap-5 py-0 md:px-[54px] w-full md:max-w-[60%] rounded-[50px] h-max'>
                    <p className="max-w-[356px] h-[78px] text-black text-sm md:text-base font-light font-['Inter'] leading-relaxed">Or fill out our online contact form, and our team will respond within 24 hours.</p>

                    <div className='w-full max-w-[508px] bg-[#D9D5D5] py-8 px-[34px] rounded-[30px] flex flex-col gap-2.5 '>
                        <input type="text" name="" id="" className='bg-white p-[15px]' placeholder='Name' />
                        <input type="email" name="email" id="email" className='bg-white p-[15px]' placeholder='Email' />
                        <input type="text" name="subject" id="subject" className='bg-white p-[15px]' placeholder='Subject' />
                        <select name="" id="" className='bg-white p-[15px]'>
                            <option disabled selected >--Reason for contact--</option>
                            <option value="Support">Support</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Feedback">Feedback</option>
                        </select>
                        <textarea name="Message" id="Message" className='h-[150px]'></textarea>
                        <button className="mt-[14px]  w-[120px] h-14 relative rounded-[35px] bg-primaryRed border border-primaryRed hover:bg-white text-white hover:text-primaryRed ">
                            <p className="  font-semibold text-lg font-['Sans'] leading-tight tracking-tight">Send</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails