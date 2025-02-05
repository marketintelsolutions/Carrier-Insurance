import React from 'react'

const TeamMemberBanner = () => {
    return (
        <section
            className='relative w-[95%] max-w-[1782px] rounded-[50px] mx-auto h-[611px] border  flex flex-col justify-center'
            style={{
                backgroundImage: 'url(/images/teambanner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='flex justify-between gap-[50px] items-end w-[80%] max-w-max mx-auto '>
                <div className='w-[372px]'><img src="/images/tick.svg" alt="tick" className='w-full' /></div>

                <div className=''><img src="/images/spherecurve.svg" alt="tick" /></div>
            </div>

        </section>
    )
}

export default TeamMemberBanner