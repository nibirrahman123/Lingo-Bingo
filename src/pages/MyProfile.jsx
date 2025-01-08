import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3">
                    <nav className="bg-[#eef7ffe0] rounded-xl  mx-2">
                        <NavBar></NavBar>
                    </nav>

                </header>
                <main className="mx-2  mt-7 space-y-7">
                    <section className="about-mission bg-[#eef7ffe0] p-5 min-h-[calc(100vh-332px)] text-center rounded-xl">
                        <div>
                            <div className="flex flex-col items-center justify-center gap-3">
                                {user && user?.email && <img className="h-[65px] w-[65px] rounded-full" src={user?.photoURL || './user.png'} alt="" />}
                                <div className="text-xl font-semibold">Welcome, {user && (user?.displayName || user?.email)}</div>
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold ">Profile Info.</h3>
                                <div>
                                    <div className="overflow-x-auto ">
                                        <table className="table">
                                            <tbody className="text-xs md:text-base">
                                                {user?.displayName && <tr >
                                                    <td className="px-0">Name</td>
                                                    <td className="font-medium">{user.displayName}</td>
                                                </tr>}
                                                {user?.email && <tr >
                                                    <td className="px-0">Email address </td>
                                                    <td className="font-medium">{user.email}</td>
                                                </tr>}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="text-center"><Link to={'/update_profile'}><button className="px-7 py-3 rounded-xl bg-primary-color text-white font-semibold mt-5 text-sm md:text-base">Update Profile</button></Link></div>
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

export default MyProfile;