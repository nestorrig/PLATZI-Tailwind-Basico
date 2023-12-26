function Footer() {
    return (
        <footer className="mb-[72px] md:mb-0">
            <div className="bg-primary text-white py-8 px-6 md:px-12">
                <div className="container mx-auto flex flex-col items-start justify-between">
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl font-semibold mb-3">About Us</h3>
                        <div className="text-sm flex flex-col gap-3 mb-3">
                            <p>Investors</p>
                            <p>Jobs</p>
                            <p>Privacy policy</p>
                            <p>Terms and Conditions</p>
                            <p>Platzi Travel, inc</p>
                            <p>Follow Us</p>
                        </div>
                        <div className="flex gap-2">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 md:w-10 md:h-10 p-0.5 md:p-1"
                                >
                                    <path
                                    fill="#ffffff"
                                    d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z"
                                    ></path>
                                </svg>
                            </figure>
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 md:w-10 md:h-10"
                                >
                                    <path
                                    fill="#ffffff"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                                    ></path>
                                </svg>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;