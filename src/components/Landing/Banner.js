import React, { useEffect, useState, useRef } from "react";

// const videos = [
//   "https://firebasestorage.googleapis.com/v0/b/tergo-c7526.firebasestorage.app/o/news%2F458254_Town_City_3840x2160%20(1).mp4?alt=media&token=b8b5dce4-64d0-4098-aad0-326c2033b801",
//   "https://firebasestorage.googleapis.com/v0/b/tergo-c7526.firebasestorage.app/o/news%2F595843_Drone_Landscape_Nature_3840x2160%20(1).mp4?alt=media&token=b702475c-a8aa-49e0-8f6b-5ddf1fd42c36",
//   "https://firebasestorage.googleapis.com/v0/b/tergo-c7526.firebasestorage.app/o/news%2F606799_Cities_City_3840x2160%20(1).mp4?alt=media&token=6e67647d-9af7-4fc1-bd62-cbd394e4ea11",
// ];


const carousel = [
  {
    heading: "Protection Against Unforeseen Risks",
    // video: "videoone",
    video: "videoone",
    items: [
      "General Business Insurance",
      "Life Business Insurance",
      "Health Insurance",
      "Claims Management",
    ],
    highlight: "We provide comprehensive insurance brokerage services that safeguard businesses and individuals",
  },
  {
    heading: "Trusted leader in insurance brokerage",
    // video: "videotwo",
    video: "videotwo",
    items: [
      "AVIATION SECTOR",
      "CONSTRUCTION SECTOR",
      "HEALTHCARE/PHARMACEUTICAL SECTOR",
      "OIL AND GAS",
    ],
    highlight: "Established in 1994, we have always put our customers first, knowing that customers satisfaction is our ultimate goal.",
  },
  {
    heading: "A professional insurance brokerage company",
    // video: "videothree",
    video: "videothree",
    items: ["Risk management", "Underwriting", "Claims advisory"],
    highlight:
      "We help our clients navigate their insurance needs effectively",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const changeSlide = (newIndex) => {
    if (isTransitioning || newIndex === activeIndex) return;

    setIsTransitioning(true);

    // Preload the next video
    if (nextVideoRef.current) {
      nextVideoRef.current.src = `/${carousel[newIndex].video}.mp4`;
      nextVideoRef.current.load();
      nextVideoRef.current.play().catch(console.error);
    }

    // After a short delay to ensure next video is playing, switch
    setTimeout(() => {
      setActiveIndex(newIndex);

      // Complete transition after fade effect
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 100);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex =
        activeIndex === carousel.length - 1 ? 0 : activeIndex + 1;
      changeSlide(nextIndex);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [activeIndex, isTransitioning]);

  // Ensure current video plays when component mounts or activeIndex changes
  useEffect(() => {
    if (currentVideoRef.current && !isTransitioning) {
      currentVideoRef.current.load();
      currentVideoRef.current.play().catch(console.error);
    }
  }, [activeIndex, isTransitioning]);

  return (
    <section
      style={{
        // backgroundImage: "url(/images/nightcity.jpg)",
        // backgroundSize: "cover",
      }}
      className="relative h-[60vh] lg:h-[98lvh] overflow-hidden"
    >
      {/* Video Background Container */}
      <div className="absolute  z-[2] top-0 left-0 w-full h-[50vh] md:h-full min-h-[88lvh]">
        {/* Current Video */}
        <video
          ref={currentVideoRef}
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className={`absolute w-full h-full inset-0 object-cover transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"
            }`}
        >
          <source
            src={`/${carousel[activeIndex].video}.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Next Video (for smooth transition) */}
        <video
          ref={nextVideoRef}
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          className={`absolute inset-0 object-cover transition-opacity duration-500 ${isTransitioning ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 xl:px-0  max-w-sub mx-auto mt-10 xl:mt-40">
        <div
          className={`relative w-full bg-black/70 py-8 pl-0 md:pr-40 lg:w-fit transition-all duration-500 transform ${isTransitioning
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0"
            }`}
        >
          <h1 className="text-white px-4 xl:px-0 max-w-[600px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
            {carousel[activeIndex].heading}
          </h1>
          <div className="absolute hidden xl:flex bg-black/70 -left-24 top-0 h-full w-24"></div>

          <div
            className={`static xl:absolute mt-5 xl:mt-0 flex -right-[60%] w-[80%] top-24 bg-primaryRed/70 p-5 xl:p-10 xl:flex flex-col gap-4 xl:gap-8 transition-all duration-500 transform ${isTransitioning
              ? "opacity-0 translate-x-4"
              : "opacity-100 translate-x-0"
              }`}
          >
            {carousel[activeIndex].items.map((item, index) => (
              <p
                key={index}
                className={`text-white  text-sm lg:text-base pb-5 border-b border-white transition-all duration-300 transform ${isTransitioning
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </p>
            ))}
            <p
              className={`mt-0 text-sm lg:text-base xl:text-lg font-medium text-white transition-all duration-500 transform ${isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              "{carousel[activeIndex].highlight}"
            </p>
          </div>
        </div>

        {/* Navigation Indicators */}
      </div>
      <div className="absolute w-full flex justify-center z-[4] bottom-10 left-10">
        <div className=" flex justify-center mt-8 gap-2">
          {carousel.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 disabled:cursor-not-allowed ${index === activeIndex
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: isTransitioning ? "0%" : "100%",
            transition: isTransitioning
              ? "width 0.3s ease-out"
              : "width 10s linear",
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
