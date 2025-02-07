import React from "react";
import Lottie from "react-lottie";
import animationData from "../utils/animations/banner.json";

const BannerAnimation = ({ size }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };


    return (
        <div style={{ width: size }}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
        </div>
    );
}

export default BannerAnimation;
