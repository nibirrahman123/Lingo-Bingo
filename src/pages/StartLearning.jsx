
import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReuseableTitle from "../components/ReuseableTitle";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const StartLearning = () => {
    const { lessons } = useContext(AuthContext)

    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3 mx-2 space-y-7">
                    <nav className="bg-[#eef7ffe0] rounded-xl  ">
                        <NavBar></NavBar>
                    </nav>
                    <ReuseableTitle title={'Start Your journey from here'} paragraph={"We don't  need any requirement for your learning just click on any lesson to see word.."}></ReuseableTitle>
                </header>
                <main className="mx-2 space-y-7 mt-7">
                    <section className="start-learning bg-[#eef7ffe0] p-5 text-center rounded-xl min-h-[calc(100vh-400px)]  md:py-9 lg:py-12">
                        <h1 className="text-center text-2xl md:text-3xl font-extrabold  mb-10 drop-shadow-md">
                            Lingo Bingo - Frosty Lessons ❄️
                        </h1>
                        <div className="flex gap-3 md:gap-5 flex-wrap justify-center">
                            {
                                lessons.map((lesson) => <Link to={`/lessons/${lesson.lesson_no}`} key={lesson.lesson_id}>
                                    <div className="bg-gradient-to-br from-[#EEF7FF] via-[#CDE8E5] to-[#7AB2B2] border rounded-lg shadow-md p-6 text-center mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg  animate-gradient">
                                        <h3 className="text-2xl font-semibold">Lesson {lesson.lesson_no}</h3>
                                    </div>

                                </Link>)
                            }

                        </div>
                    </section>
                    {/* single video tutorial section */}
                    <section className="start-learning bg-[#eef7ffe0] text-center rounded-xl  p-5  lg:p-8">
                        <div className="grid md:grid-cols-2 gap-5 items-center">

                            <div>
                                <iframe
                                    className="w-full h-[200px] sm:h-[300px] md:h-[250px] lg:h-[300px] rounded-xl"
                                    src="https://www.youtube.com/embed/rQwiEjxYSPY"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="YouTube Video"
                                ></iframe>
                            </div>

                            <div className="max-w-[350px] flex flex-col items-center mx-auto space-y-4">
                                <h3 className="font-bold text-2xl ">Here is a Sample of video that you can learn Arabic.</h3>
                                <p className="text-secondary-color text-sm">Go to tutorial&apos;s page to see more video..</p>
                                <div>
                                    <Link to={'/tutorials'}><button className="bg-primary-color flex items-center gap-1  text-white py-3 px-7 rounded-xl hover:bg-secondary-color font-semibold">View more <FaArrowRight></FaArrowRight></button></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="bg-[#eef7ffe0] mx-2 rounded-xl mt-7">

                    <Footer></Footer>
                </footer>
            </div>
        </div>
    );
};

export default StartLearning;