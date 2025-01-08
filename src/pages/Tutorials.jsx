import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReuseableTitle from "../components/ReuseableTitle";
import { FaArrowLeft } from "react-icons/fa";

const Tutorials = () => {
  const videoData = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/rQwiEjxYSPY?si=MHjmR0XRON49nOe2",
      title: "Learn Fruits in Arabic for beginners with fun quiz exercises",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/svQnjJXk2qg?si=Y7gh3hoXMxngWJ1W",
      title: "Understand basic greetings in Arabic for daily conversations",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/wBgN8SYrS0o?si=iDexSTNDOmyUGfc9",
      title: "Explore top ten essential Arabic phrases for travelers abroad",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/FV6aIpSBYGo?si=B1UH-WdOXHnK9Rz_",
      title: "Master colors in Arabic with easy-to-follow visual examples",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/VqVGKoS_mMY?si=6DVg4pzVMDZfWlo8",
      title: "Learn common Arabic verbs for beginners in simple steps",
    },
    {
      id: 6,
      link: "https://www.youtube.com/embed/Xqia7JhqWBA?si=s5MgC8tqXIzEU9S3",
      title: "Introduction to Arabic numbers and counting for easy learning",
    },
    {
      id: 7,
      link: "https://www.youtube.com/embed/z1R5QJB-6DY?si=LVVs4i7l87uyQRNF",
      title: "Learn Arabic pronouns with interactive examples and visuals",
    },
    {
      id: 8,
      link: "https://www.youtube.com/embed/L6VMdS43trI?si=jLg6SI80Z7AxiXyO",
      title: "How to form sentences in Arabic for improved communication",
    },
    {
      id: 9,
      link: "https://www.youtube.com/embed/VpZ5prqnDZI?si=nyRcjnWi10X_j6zf",
      title: "Enhance your vocabulary with basic Arabic nouns and phrases",
    },
  ];


  return (
    <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
      <div className="max-w-7xl mx-auto ">
        <header className="pt-3">
          <nav className="bg-[#eef7ffe0] rounded-xl  mx-2">
            <NavBar></NavBar>
          </nav>
          <section className="banner mx-2 mt-7">
            <ReuseableTitle title={"Tutorials on Arabic Words"} paragraph={"See all documentaries for better learning. Here is some Extreme explanation in these video's."}></ReuseableTitle>
          </section>
        </header>
        <main className="mx-2  mt-7 space-y-7">
          <section className="about-mission bg-[#eef7ffe0] p-5  rounded-xl">
            <div className="grid md:grid-cols-2 gap-5 items-center">
              {
                videoData.map((video) => <div key={video.id}>
                  <iframe
                    className="w-full h-[200px] sm:h-[300px] md:h-[250px] lg:h-[300px] rounded-xl"
                    src={video.link}
                    allowFullScreen
                    title={"YouTube Video"}
                  ></iframe>
                  <h4 className="font-semibold md:text-xl ml-1 mt-2">{video.title}</h4>
                </div>)
              }


            </div>
            <div className='mt-5'><Link to={'/start_learning'}>
              <button className="py-3 px-8 rounded-xl text-xl font-semibold flex items-center gap-1 bg-gradient-to-br from-[#EEF7FF] via-[#CDE8E5] to-[#7AB2B2] animate-gradient">
                <FaArrowLeft /> Learn Vocabularies
              </button></Link></div>
          </section>

        </main>
        <footer className="bg-[#eef7ffe0] mx-2 rounded-xl mt-7">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default Tutorials;