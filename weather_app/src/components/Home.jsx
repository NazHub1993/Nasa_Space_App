import React from 'react'
import { Globe } from "@/components/ui/globe"


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-20 bg-gray-900 text-white text-center relative top-40 -scale-z-105">

            {/* App Name / Hero */}
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold mb-4 font-cursive drop-shadow-lg libre-baskerville-bold">
               O R B I T
            </h1>

            {/* Subtitle / Description */}
            <p className="text-md sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-6">
                Your smart weather companion. Get real-time forecasts, track temperature, wind speed, and humidity, all in a clean and intuitive interface.
            </p>

            {/* Action Button */}
            <button onClick={() => (window.location.href = "/SearchDrawMap")} className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 hover:font-bold cursor-pointer transition-all duration-300">
                Check Weather
            </button>

            


            
            
        </div>
    )
}

export default Home