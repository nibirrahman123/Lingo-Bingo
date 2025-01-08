import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReuseableTitle from "../components/ReuseableTitle";

const AboutUs = () => {
    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3">
                    <nav className="bg-[#eef7ffe0] rounded-xl  mx-2">
                        <NavBar></NavBar>
                    </nav>
                    <section className="banner mx-2 mt-7">
                        <ReuseableTitle title={"..Welcome to my Web Application.."}></ReuseableTitle>
                    </section>
                </header>
                <main className="mx-2  mt-7 space-y-7">
                    <section className="about-mission bg-[#eef7ffe0] min-h-[calc(100vh-332px)] p-5  rounded-xl">
                        <div className="">
                            <div className="max-w-5xl mx-auto  ">
                                <h1 className="text-3xl font-bold text-center  mb-5">
                                    About Me
                                </h1>
                                <h2 className=" flex items-end gap-1 mb-3"><span className="text-xs md:text-base">Hello! 👋, My I introducing Myself. I am </span><span className="text-xl md:text-3xl font-bold">Md.Tanbir Hossen</span></h2>
                                <p className="text-lg  mb-6">
                                    I&apos;m a passionate <strong>web developer</strong> with a focus
                                    on building engaging and user-friendly applications. I enjoy crafting
                                    visually appealing and functional websites that deliver a great user
                                    experience. With experience in modern front-end technologies, I
                                    continuously strive to enhance my skills and bring ideas to life
                                    through code.
                                </p>

                                <h2 className="text-2xl font-semibold mt-8 mb-4">
                                    💻 Skills
                                </h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <strong>Languages & Frameworks:</strong> JavaScript, React
                                    </li>
                                    <li>
                                        <strong>Styling Tools:</strong> Tailwind CSS, HTML & CSS
                                    </li>
                                    <li>
                                        <strong>Backend & Database:</strong> Firebase (Authentication,
                                        Database, Hosting)
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-semibold  mt-8 mb-4">
                                    📂 Projects
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold ">
                                            1. Phero Gadget Heaven
                                        </h3>
                                        <p className="">
                                            A dynamic website showcasing gadgets with an attractive layout and
                                            seamless navigation.
                                        </p>
                                        <a
                                            href="https://phero-gadget-heaven.surge.sh/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-700">2. Cricket Buzz</h3>
                                        <p className="text-gray-600">
                                            A cricket-themed application with real-time information and
                                            features for cricket enthusiasts.
                                        </p>
                                        <a
                                            href="https://cricket-buzz.surge.sh/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-700">
                                            3. Phero Assignment 6
                                        </h3>
                                        <p className="text-gray-600">
                                            A creative project showcasing my skills in design and development
                                            with React and Tailwind.
                                        </p>
                                        <a
                                            href="https://phero-assignment-6.surge.sh/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                                    🚀 Looking Ahead
                                </h2>
                                <p className="text-lg text-gray-600">
                                    I’m constantly working on improving my skills and exploring new
                                    technologies to take on exciting projects. I aim to create
                                    applications that make a difference and provide users with a seamless
                                    digital experience. Feel free to connect or explore my work! 😊
                                </p>
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

export default AboutUs;