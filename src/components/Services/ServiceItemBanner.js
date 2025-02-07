import React from 'react'
import BannerAnimation from '../BannerAnimation'

const ServiceItemBanner = ({ serviceItem }) => {
    return (
        <section
            className='relative w-[95%] max-w-[1782px] rounded-[50px] mx-auto h-[611px] border  flex flex-col justify-center'
            style={{
                backgroundImage: 'url(/images/serviceitembanner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='flex justify-end gap-[50px] items-end w-[95%] max-w-max mx-auto '>
                <div className=''><BannerAnimation size={500} /></div>
            </div>

            <div className='w-full absolute -bottom-[180px] flex justify-center'>
                <img src={`/images/${serviceItem.image}.png`} alt="motorimage" className=' w-[55%] max-w-[896px]' />
            </div>

        </section>
    )
}

export default ServiceItemBanner