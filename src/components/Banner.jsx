
import { useEffect, useState } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co.com/vwm4mr1/banner-2.jpg",
            title: "Welcome to Lingo Bingo",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/m8Fwwqh/banner-3.jpg",
            title: "Join Our Community",
        },

        
        {
            id: 4,
            image: "https://i.ibb.co.com/mGtmmLx/depositphotos-18837227-stock-illustration-a-boy-writing.jpg",
            title: "Join Our Community",
        },

        {
            id: 5,
            image: "https://i.ibb.co.com/55sZtHp/bbd7fc8f765d2fa2943383c665274a26d3ada8a8-2560x1260.jpg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-700 ${currentSlide === index ? "translate-x-0" : "translate-x-full"
                        }`}
                    style={{
                        transform:
                            currentSlide === index
                                ? "translateX(0)"
                                : currentSlide > index
                                    ? "translateX(-100%)"
                                    : "translateX(100%)",
                    }}
                >
                    <img
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3646558b] via-transparent to-[#3646558b]  flex flex-col justify-center items-center text-primary-color">
                        <h2 className="text-2xl sm:text-3xl font-bold">{slide?.title}</h2>
                    </div>
                </div>
            ))}
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
