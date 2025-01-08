import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold ">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base">This website mission is Our mission , and our mission is <strong>Everyone can speak in Arabic.</strong>And for This mission we will do our best. Support us by stay with us..</p>
            <div className="mt-5 text-left">

                <div  className="collapse bg-[#eef7ffce]">
                    <input type="checkbox" />
                    <div className="collapse-title ">
                        <h3 className="font-semibold text-base sm:text-xl link-hover">How can I learn Vocabularies?</h3>
                    </div>
                    <div className="collapse-content">
                        <ol className="ml-4 text-sm sm:text-base *:border-b space-y-1">
                            <li className="list-decimal">At first you have to <Link to={'/login'} className="link-hover text-blue-600 font-semibold">login</Link> to our website.</li>
                            <li className="list-decimal">After login, Go to Start learning.</li>
                            <li className="list-decimal">Choose any lesson and start learning Arabic.</li>
                            <li className="list-decimal">after choose an lesson click any word to listen pronounce & more ...</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;