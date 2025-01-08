
const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-customTeal via-customBlue to-customMint text-white py-10 ">
            <div className=" mx-auto px-4">
                {/* Footer Content */}
                <div className="flex flex-wrap justify-between items-center space-y-6 lg:space-y-0">

                    {/* Contact Information */}
                    <div className="w-full lg:w-1/3">
                        <h3 className="text-lg font-bold mb-2 text-primary-color">Contact Us</h3>
                        <ul className="text-sm space-y-1 text-secondary-color font-medium">
                            <li>
                                <strong>Email:</strong> info@lingobingo.com
                            </li>
                            <li>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </li>
                            <li>
                                <strong>Address:</strong> 123 Winter Lane, Frost City, IC 56789
                            </li>
                        </ul>
                    </div>
                    {/* Social Media Links */}
                    <div className="w-full lg:w-1/3 text-center">
                        <h3 className="text-lg font-bold mb-2 text-primary-color">Follow Us</h3>
                        <div className="flex justify-center space-x-4 text-secondary-color">
                            {/* Facebook */}
                            <a href="#" className="" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54v-2.207c0-2.507 1.492-3.891 3.777-3.891 1.094 0 2.238.195 2.238.195v2.464h-1.261c-1.242 0-1.631.771-1.631 1.562v1.878h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className="" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.23 5.924a8.986 8.986 0 01-2.623.719 4.487 4.487 0 001.965-2.482 9.036 9.036 0 01-2.86 1.093 4.478 4.478 0 00-7.66 4.086 12.71 12.71 0 01-9.244-4.695 4.478 4.478 0 001.384 5.977 4.463 4.463 0 01-2.028-.559v.057a4.478 4.478 0 003.587 4.392 4.484 4.484 0 01-2.023.077 4.478 4.478 0 004.186 3.111 8.987 8.987 0 01-6.639 1.866 12.676 12.676 0 006.885 2.018c8.267 0 12.789-6.854 12.789-12.79 0-.195-.004-.391-.013-.585a9.146 9.146 0 002.263-2.33z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c-5.438 0-9.837 4.399-9.837 9.837 0 4.894 3.543 8.965 8.208 9.716v-6.888h-2.466v-2.828h2.466V9.269c0-2.453 1.496-3.808 3.677-3.808 1.048 0 2.167.188 2.167.188v2.457h-1.221c-1.205 0-1.581.747-1.581 1.511v1.81h2.662l-.425 2.828h-2.237v6.888c4.665-.751 8.208-4.822 8.208-9.716 0-5.438-4.399-9.837-9.837-9.837z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="w-full lg:w-1/3 text-center lg:text-right">
                        <p className="text-sm text-primary-color font-medium">&copy; 2024 Lingo Bingo. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
