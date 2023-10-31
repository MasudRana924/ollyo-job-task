import React from 'react';
import Lottie from "lottie-react";
import preloaderAnimation from './preloader.json';
const Preloader = () => {
    return (
        <div className="flex flex-1 items-center justify-center mx-auto">
            <Lottie animationData={preloaderAnimation} className="mt-72 h-16 w-16"></Lottie>
        </div>
    );
};

export default Preloader;