import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/start_learning'}>Start Learning</NavLink></li>
        <li><NavLink to={'/tutorials'}>Tutorials</NavLink></li>
        <li><NavLink to={'/about_us'}>About Us</NavLink></li>
        {user && <li><NavLink to={'/my_profile'}>My Profile</NavLink></li>}

    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className={`btn btn-ghost p-1 text-xl md:text-2xl font-bold text-primary-color animate__animated animate__backInLeft ${user && ' hidden sm:flex'} `}>LINGO BINGO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user && user?.email ?
                        <div className="flex items-center gap-3">
                            <img className="h-[45px] w-[45px] rounded-full" src={user?.photoURL || './user.png'} alt="" />
                            <button onClick={logOut} className="bg-primary-color font-semibold text-lg px-3 sm:px-5 py-2 rounded-xl text-white hover:">LogOut</button>
                        </div>
                        :
                        <Link to={'/authentication'} className="bg-primary-color font-semibold text-lg px-3 sm:px-5 py-2 rounded-xl text-white hover:">Login</Link>
                }
            </div>




        </div>
    );
};

export default NavBar;