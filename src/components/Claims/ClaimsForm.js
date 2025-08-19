import React from 'react'

const ClaimsForm = () => {
    return (
        <section className='w-full max-w-[1200px] px-6 xl:px-0 mx-auto pt-20 md:pt-40'>
            <h2 className='text-xl md:text-2xl max-w-[800px]'>Fill out the form below and one of our licensed insurance advisors will contact you within 1 business day.</h2>
            <form className='bg-gray-200 p-10 mt-10 rounded-[10px] flex flex-col gap-10'>
                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-lg font-light'>Name</label>
                        <input type="text" id='name' name='name' className='py-3 px-5 text-base rounded-[5px] w-full' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-lg font-light'>Email</label>
                        <input type="email" id='email' name='email' className='py-3 px-5 text-base rounded-[5px] w-full' />
                    </div>
                </div>

                <div className='flex flex-wrap md:flex-nowrap gap-10'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="phone" className='text-lg font-light'>Phone Number</label>
                        <input type="tel" id='phone' name='phone' className='py-3 px-5 text-base rounded-[5px] w-full' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="inquiry" className='text-lg font-light'>Type of Inquiry</label>
                        <select name="inquiry" id="inquiry" className='py-3 px-5 text-base rounded-[5px] w-full'>
                            <option value="quote">Get a Quote</option>
                            <option value="policy">Existing Policy</option>
                            <option value="claim">File a Claim</option>
                            <option value="general">General Question</option>
                        </select>
                    </div>
                </div>

                <textarea name="message" id="message" className='py-3 px-5 text-base rounded-[5px] h-[200px] w-full' />

            </form>
        </section>
    )
}

export default ClaimsForm