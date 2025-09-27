import React, { useEffect, useState } from "react";
import { Globe } from "@/components/ui/globe";

const ScrollSection = () => {
    const [scrollY, setScrollY] = useState(0);

    // Define the scroll distance over which the animation should complete
    const animationEndScroll = 500; // e.g., animation finishes after 500px of scrolling

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Calculate the progress of the scroll animation (a value from 0 to 1)
    const scrollProgress = Math.min(1, scrollY / animationEndScroll);

    return (
        <div className="w-full h-screen flex items-center justify-between overflow-x-hidden bg-gray-900 text-white px-10">
            {/* Left text sliding in */}
            <div
                className="max-w-xl text-lg sm:text-xl lg:text-2xl font-medium transition-transform duration-500"
                style={{
                    transform: `translateX(${Math.max(0, 200 - scrollY * 0.5)}px)`,
                    opacity: Math.min(1, scrollY / 200),
                }}
            >
                <h2 className="text-3xl font-bold mb-4">Stay Ahead with ORBIT</h2>
                <p>
                    ORBIT keeps you informed with real-time weather updates, temperature trends,
                    and forecasts tailored to your location. Navigate your day with confidence.
                </p>
            </div>

            {/* Globe moving completely to the right */}
            <div
                style={{
                    // Translate from 0vw to 100vw based on scroll progress
                    transform: `translateX(${scrollProgress * 100}vw)`,
                    transition: "transform 0.1s linear",
                }}
            >
                <Globe />
            </div>
        </div>
    );
};

export default ScrollSection;