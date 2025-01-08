
import { BiCommentError } from "react-icons/bi";
import { FaLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex justify-center p-5 items-center min-h-screen  bg-primary-color text-white'>
            <div className=" ">
                <div className='text-4xl md:text-6xl lg:text-8xl '>
                    <BiCommentError></BiCommentError>
                </div>
                <h2 className='text-5xl md:text-7xl lg:text-9xl mb-4 font-bold'>Oops!</h2>
                <p className='italic  md:text-lg font-medium mb-2'>Something&apos;s Wrong...</p>
                <p className='italic  md:text-lg font-medium'>This page is not found.</p>
                <Link to={'/'}><button className='flex items-center gap-1 font-medium md:text-xl px-7 py-3 bg-white text-primary-color rounded-xl mt-5 border-2 border-white hover:bg-primary-color hover:text-white'><FaLeftLong></FaLeftLong> Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;