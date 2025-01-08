import { useState, useRef, useEffect, useContext } from 'react';
import CountUp from 'react-countup';
import { AuthContext } from '../provider/AuthProvider';

const Success = () => {
    const [startCount, setStartCount] = useState(false);

    // data from AuthProvider
    const { lessons, words } = useContext(AuthContext)




    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="" >
            {startCount &&
                <div className='grid md:grid-cols-5 *:w-full *:text-left gap-5 *:p-4 '>

                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="md:col-span-3 p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg">
                        <div>
                            Available Users <span className='text-2xl font-bold'><CountUp end={1000} duration={5} />+</span>
                        </div>
                        <p>We have the best success rate...</p>
                    </div>
                    <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="md:col-span-2 p-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg">
                        <div>
                            <span className='text-2xl font-bold'><CountUp end={lessons.length} duration={3} />+</span> Lessons
                        </div>
                        <p>
                            Enough Lessons Available for learning...
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" className="md:col-span-2 p-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-lg">
                        <div>vocabulary&apos;s <span className='text-2xl font-bold'><CountUp end={words.length} duration={4} />+</span></div>
                        <p>Thousands of word are add everyday...</p>
                    </div>
                    <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="md:col-span-3 p-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg shadow-lg">
                        <div> <span className='text-2xl font-bold'><CountUp end={20} start={10} duration={3}></CountUp>+</span> Tutorial </div>
                        <p>So much resources is Available to support you.</p>
                    </div>
                </div>}
        </div>
    );
};

export default Success;
