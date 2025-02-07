import React from 'react'
import { FaArrowRight, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { IoMailOpenOutline } from 'react-icons/io5'

const ContactDetails = () => {
    return (
        <section className='w-[85%] max-[1480px] mx-auto mt-[95px] pb-[140px]'>
            <div className='px-[37px] mx-auto justify-center flex gap-[30px]'>
                <div>
                    <h2 className="text-[#cc1517] text-5xl font-extrabold font-['Inter'] leading-[57.60px]">Contact Us</h2>
                    <p className="mt-10 w-[455px]">
                        <span className="text-[#060606] text-base font-light font-['Inter'] leading-relaxed">Get in touch with  </span>
                        <span className="text-[#060606] text-base font-bold font-['Inter'] leading-relaxed">
                            Truebond Insurance Brokerage Limited{" "}</span>
                        <span className="text-[#060606] text-base font-light font-['Inter'] leading-relaxed">
                            for any inquiries, consultations, or support. We’re here to assist you with all your insurance needs.
                        </span>
                    </p>

                    <div className='mt-6 px-6 flex flex-col gap-4'>
                        <div className='flex gap-[30px]'>
                            <span className='inline-flex px-3 py-2 bg-[#666] text-white text-[24px]'><FaLocationDot /></span>
                            <p className="text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-wide">Plot 22, Akiogun New Market Road, <br />Oniru Victoria Island, Lagos</p>
                        </div>
                        <div className='flex gap-[30px]'>
                            <span className='inline-flex px-3 py-2 bg-[#666] text-white text-[24px]'><IoMailOpenOutline /></span>
                            <p className="text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-wide">info@carrierinsurancebrokers.com, <br />
                                it-@carrierinsurancebrokers.com</p>
                        </div>
                        <div className='flex gap-[30px]'>
                            <span className='inline-flex px-3 py-2 bg-[#666] text-white text-[24px]'><FaPhoneVolume /></span>
                            <p className="text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-wide">
                                +234 906 297 9782   |  +234 906 297 9786
                                <br />
                                +234 906 244 7811    | +234 707 452 1825
                            </p>
                        </div>

                    </div>
                    <p className='mt-6'>
                        <span class="text-[#060606] text-base font-bold font-['Inter'] leading-relaxed">Business Hours: </span>
                        <span class="text-[#060606] text-base font-light font-['Inter'] leading-relaxed">8am-6pm</span>
                    </p>
                </div>
                <div>
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
            <div className='mt-[52px] justify-center flex gap-5'>
                <div className='relative'>
                    <img src="/images/woman.png" alt="woman" className='' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[#cc15188e] rounded-[30px]'></div>
                </div>

                <div className='flex justify-between py-10 px-[54px] w-full max-w-[60%] rounded-[50px] h-max' style={{ backgroundImage: `url(/images/onlinecontact.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <p className="w-[226px] h-[78px] text-[#f8f8f8] text-base font-light font-['Inter'] leading-relaxed">Or fill out our online contact form, and our team will respond within 24 hours.</p>

                    <div className='w-[60%] max-w-[508px] bg-[#D9D5D5] py-8 px-[34px] rounded-[30px] flex flex-col gap-2.5 '>
                        <input type="text" name="" id="" className='bg-white p-[15px]' placeholder='Your Name' />
                        <input type="text" name="" id="" className='bg-white p-[15px]' placeholder='Your Name' />
                        <select name="" id="" className='bg-white p-[15px]'>
                            <option value="Financial Consulting">Financial Consulting</option>
                        </select>
                        <button className="mt-[14px] w-[120px] h-14 relative rounded-[35px] bg-primaryRed ">
                            <p className="left-[18px] top-[18px] absolute text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Send</p>
                            <div className="w-[42px] h-[42px] left-[71px] top-[7px] absolute">
                                <div className="w-[42px] h-[42px] left-0 top-0 absolute flex justify-center items-center bg-[#fefdff] rounded-full" >

                                    <span className='text-primaryRed text-[30px]'><FaArrowRight /></span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails