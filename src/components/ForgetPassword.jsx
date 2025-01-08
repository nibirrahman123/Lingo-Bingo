import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const { resetPassword } = useContext(AuthContext)
    const { email: initialEmail } = useOutletContext();
    const [email, setEmail] = useState(initialEmail || "");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        resetPassword(email)
            .then( () => {
                toast.warning('password reset email sent')
                navigate('/authentication')
                window.location.href = "https://mail.google.com";
            })
            .catch(error => console.log(error))
    };

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="">
            <div className="max-w-3xl mx-auto md:py-10 py-0 lg:py-16 rounded-xl">
                <h2 className="font-semibold text-2xl md:text-4xl text-center">Forget Password</h2>
                <div className="divider"></div>
                <form className="space-y-7 p-5" onSubmit={handleSubmit}>
                    {/* Email input field */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-primary-color">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Reset email password"
                            className="px-5 outline-none py-5 bg-white w-full rounded-xl"
                            name="email"
                            value={email} // Bind state value to input
                            onChange={handleInputChange} // Handle input changes
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="font-semibold text-xl py-4 w-full bg-primary-color hover:bg-secondary-color rounded-xl text-white"
                    >
                        Reset Password
                    </button>
                </form>
                <p className="font-semibold mt-7 text-center">
                    Don’t Have An Account?{" "}
                    <Link
                        to={'/authentication/register'}
                        className="text-red-500 link-hover"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
