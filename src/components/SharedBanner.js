import React, { useEffect, useState } from "react";
import BannerAnimation from './BannerAnimation'

const SharedBanner = ({ img, heading, page }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, []);

    return (
        <section className='relative w-full  mx-auto h-[50vh] md:h-[80vh]   flex flex-col justify-center' style={{ backgroundImage: 'url(/images/nightcity.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            {/* <div className='absolute z-[2] top-0 left-0 w-full h-full bg-black/30'></div> */}
            <div className='relative z-[2] flex  justify-between gap-[50px] items-center w-[90%] max-w-max mx-auto '>
                <div className='hidden lg:flex'><BannerAnimation size={500} /></div>
                {/* <div className='w-[372px]'><img src="/images/tick.svg" alt="tick" className='w-full' /></div> */}
                <div
                    className={`relative bg-white/70 py-8 pl-0 md:pr-20 w-fit transition-all duration-500 transform ${isTransitioning
                        ? "opacity-0 translate-y-4"
                        : "opacity-100 translate-y-0"
                        }`}
                >
                    <h1 className="text-black w-full  md:max-w-[700px] px-6 md:px-0 text-2xl md:text-4xl lg:text-4xl leading-tight">
                        {heading}
                    </h1>
                    <div className="absolute bg-white/70 -left-24 top-0 h-full w-24"></div>

                    <div className="absolute -top-6 left-0">
                        <div className="relative uppercase text-sm md:text-base pr-10 md:pr-20 px-6 md:pl-0 py-3 bg-primaryRed text-white ">
                            <p>{page}</p>

                            <div className="absolute bg-primaryRed -left-24 top-0 h-full w-24"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SharedBanner