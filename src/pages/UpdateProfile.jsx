import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { updateProfileInfo } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const name = form.get("name");
        const photo = form.get("photo");
        updateProfileInfo(name, photo)
            .then(() => {
                navigate('/my_profile')
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3">
                    <nav className="bg-[#eef7ffe0] rounded-xl  mx-2">
                        <NavBar></NavBar>
                    </nav>

                </header>
                <main className="mx-2  mt-7 space-y-7">
                    <section className="about-mission bg-[#eef7ffe0] min-h-[calc(100vh-332px)] p-5 text-center rounded-xl">
                        <div className="max-w-3xl  mx-auto md:py-10 py-0  lg:py-16 rounded-xl">
                            <h2 className="font-semibold text-2xl md:text-4xl text-center">
                                Update Profile
                            </h2>
                            <div className="divider"></div>
                            <form className="space-y-7 " onSubmit={handleSubmit}>
                                {/* Name input field */}
                                <div className="name">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl text-primary-color">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="px-5 outline-none py-5 bg-white w-full rounded-xl"
                                        name="name"
                                        required
                                    />
                                </div>
                                {/* Photo URL input field */}
                                <div className="photo-url">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl text-primary-color">
                                            Photo-URL
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your photo link"
                                        className="px-5 outline-none py-5 bg-white w-full rounded-xl"
                                        name="photo"
                                        required
                                    />
                                </div>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="font-semibold text-xl py-4 w-full bg-primary-color hover:bg-secondary-color rounded-xl text-white"
                                >
                                    Update Information
                                </button>
                            </form>
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

export default UpdateProfile;