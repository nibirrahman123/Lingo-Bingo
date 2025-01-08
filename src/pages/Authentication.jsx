import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Authentication = () => {
    const [email , setEmail] = useState('')
    
    return (
        <div className="bg-[url('./assets/bg-for-project.png')] bg-fixed  bg-no-repeat bg-cover  text-primary-color roboto-thin pb-3">
            <div className="max-w-7xl mx-auto ">
                <header className="pt-3">
                    <nav className="bg-[#eef7ffe0] rounded-xl  mx-2">
                        <NavBar></NavBar>
                    </nav>
                </header>
                <main className="mx-2  mt-7 space-y-7">
                    <section className="login/registration bg-[#eef7ffe0] p-5 text-center min-h-[calc(100vh-332px)] rounded-xl">
                        <Outlet context={{email,setEmail}}></Outlet>
                    </section>
                    
                </main>
                <footer className="bg-[#eef7ffe0] mx-2 rounded-xl mt-7">
                    <Footer></Footer>
                </footer>
            </div>
        </div>
    );
};

export default Authentication;