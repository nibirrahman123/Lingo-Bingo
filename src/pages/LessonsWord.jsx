import NavBar from '../components/NavBar';
import ReuseableTitle from '../components/ReuseableTitle';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import { FaArrowLeft } from 'react-icons/fa';

const LessonsWord = () => {
    const [modalWord, setModalWord] = useState({})
    const [loading, setLoading] = useState(true);
    const { words } = useContext(AuthContext);
    const { lesson_no } = useParams();
    const existedWords = words.filter((word) => word.lesson_no == lesson_no)


    useEffect(() => {
        if (words.length > 0) {
            setLoading(false);
        }
    }, [words]);
    const difficultyColor = {
        'hard': 'bg-red-500',
        'medium': 'bg-yellow-400',
        'easy': 'bg-green-400'
    }
    // word pronunciation function

    window.speechSynthesis.onvoiceschanged = () => {
        // eslint-disable-next-line no-unused-vars
        const voices = window.speechSynthesis.getVoices();
    };

    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "ar-SA"; // Arabic
        window.speechSynthesis.speak(utterance);
    };
    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed bg-no-repeat bg-cover text-primary-color roboto-thin pb-3">
            {loading ?
                <Loading></Loading> :
                <div className="max-w-7xl mx-auto">
                    <header className="pt-3 mx-2 space-y-7">
                        <nav className="bg-[#eef7ffe0] rounded-xl">
                            <NavBar />
                        </nav>
                        <ReuseableTitle
                            title={`Lingo Bingo - Lesson ${lesson_no} ❄️`}
                            paragraph={
                                "Start your journey ,You will success must ."
                            }
                        />
                    </header>
                    <main className="mx-2 mt-7">
                        <section className="start-learning   text-center rounded-xl min-h-[calc(100vh-400px)] border-2 bg-[#eef7ffe0] p-3 md:p-5 ">
                            <h1 className="text-center   rounded-xl text-2xl md:text-3xl font-extrabold mb-10 drop-shadow-md">
                                {existedWords.length}- interesting Words- Lesson {lesson_no}
                            </h1>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 ">
                                {
                                    existedWords.map((word, index) => (
                                        <div key={index}
                                            onClick={() => pronounceWord(`${word.word}`)}
                                            className={`bg-[#eef7ffe0] flex flex-col justify-between space-y-5 shadow-md p-4 text-left rounded-lg ${difficultyColor[word.difficulty]}`} >
                                            <div>
                                                <h1 className="font-bold text-3xl p-2 text-center">{word?.word}</h1>
                                                <p>Meaning: {word.meaning}</p>
                                                <p>Pronunciation: {word.pronunciation}</p>
                                                <p>Part of speech: {word.part_of_speech}</p>
                                            </div>
                                            <div className="text-center ">
                                                <button onClick={() => {
                                                    setModalWord(word)
                                                    document.getElementById('my_modal_1').showModal()
                                                }} className="px-6 py-3 bg-primary-color text-white rounded-xl">
                                                    When to say
                                                </button>
                                            </div>


                                        </div>
                                    ))
                                }
                            </div>
                            {/* back to lets learn page */}
                            <div className='mt-5'><Link to={'/start_learning'}>
                                <button className="py-3 px-8 rounded-xl text-xl font-semibold flex items-center gap-1 bg-gradient-to-br from-[#EEF7FF] via-[#CDE8E5] to-[#7AB2B2] animate-gradient">
                                    <FaArrowLeft /> Back to Lesson
                                </button></Link></div>
                        </section>


                        {/* this is modal */}
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box bg-gradient-to-br from-[#EEF7FF] via-[#CDE8E5] to-[#7AB2B2]">
                                <h3 className="font-bold text-3xl">{modalWord?.word}</h3>
                                <p className="py-1 text-left font-medium text-lg">Meaning: <span className="font-semibold text-xl ">{modalWord?.meaning}</span></p>
                                <p className="py-1 text-left font-medium text-lg">When to say: <span className="font-semibold text-xl ">{modalWord?.when_to_say}</span></p>
                                <p className="py-1 text-left font-medium text-lg">Here is an Example: <span className="font-semibold text-xl ">{modalWord?.example}</span></p>
                                <div className="modal-action justify-center">
                                    <button
                                        className="w-full bg-primary-color px-7 py-3 rounded-xl hover:bg-secondary-color text-white"
                                        onClick={() => document.getElementById('my_modal_1').close()}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </dialog>



                    </main>
                    <footer className="bg-[#eef7ffe0] mx-2 rounded-xl mt-7">
                        <Footer />
                    </footer>
                </div>}

        </div>
    );
};

export default LessonsWord;
