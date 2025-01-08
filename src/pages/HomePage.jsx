import { Link } from "react-router-dom";
import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Success from "../components/Success";

const HomePage = () => {

    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3">
                    <nav className="bg-[#eef7ffe0] rounded-xl  mx-2">
                        <NavBar></NavBar>
                    </nav>
                    <section className="banner mx-2 mt-7">
                        <Banner></Banner>
                    </section>
                </header>
                <main className="mx-2  mt-7 space-y-7">
                    <section className="about-mission bg-[#eef7ffe0] p-5 text-center rounded-xl">
                        <About></About>
                    </section>
                    <section data-aos="fade-up" className="about-mission bg-[#eef7ffe0] p-5 text-center rounded-xl">
                        <Success></Success>
                    </section>
                    <section className="winter-vocabulary bg-[#eef7ffe0] p-5 text-center rounded-xl">
                        <h2 className="text-2xl font-semibold text-[#0a3d62]">Winter Vocabulary</h2>
                        <p className="text-lg mt-3 text-[#34495e]">
                            We are lunching vocabulary&apos;s on another languages very soon , stay with us on website.
                        </p>
                        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <p className="font-bold text-[#0a3d62]">❄️ Snow</p>
                                <p className="italic text-[#34495e]">Nieve (Spanish)</p>
                            </div>
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <p className="font-bold text-[#0a3d62]">☕ Hot Chocolate</p>
                                <p className="italic text-[#34495e]">Chocolat Chaud (French)</p>
                            </div>
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <p className="font-bold text-[#0a3d62]">⛸️ Ice Skating</p>
                                <p className="italic text-[#34495e]">Pattinaggio sul ghiaccio (Italian)</p>
                            </div>
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <p className="font-bold text-[#0a3d62]">🎿 Skiing</p>
                                <p className="italic text-[#34495e]">Esquí (Spanish)</p>
                            </div>
                        </div>
                    </section>
                    <section className="winter-challenge bg-[#eef7ffe0] p-5 text-center rounded-xl">
                        <h2 className="text-2xl font-semibold text-[#0a3d62]">Winter Language Challenge</h2>
                        <p className="text-lg mt-3 text-[#34495e]">
                            Take on the winter challenge and boost your language skills while enjoying the snowy season!
                        </p>
                        <div className="mt-5">
                            <Link to={'/start_learning'}><button className="px-6 py-2 rounded-full bg-primary-color font-semibold text-white hover:bg-secondary-color">
                                Join the Challenge
                            </button></Link>
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <h3 className="font-bold text-[#0a3d62]">🎯 Daily Streak</h3>
                                <p className="text-[#34495e]">Learn a new word every day and maintain your streak!</p>
                            </div>
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <h3 className="font-bold text-[#0a3d62]">⏱️ Timed Quiz</h3>
                                <p className="text-[#34495e]">Test your skills with a 5-minute winter-themed quiz.</p>
                            </div>
                            <div className="p-3 bg-white shadow-md rounded-lg">
                                <h3 className="font-bold text-[#0a3d62]">🏆 Leaderboard</h3>
                                <p className="text-[#34495e]">Compete with friends and climb the leaderboard!</p>
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

export default HomePage;