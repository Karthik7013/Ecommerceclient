
export default function Footer() {
    return (
        <div className="bg-[#2b6cb0] text-white">
            <div className="py-2 px-3 md:max-w-7xl m-auto">
                <div className="text-2xl pt-8 pb-4 font-black px-1">
                    <h2>Ekart</h2>
                </div>
                <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-1 gap-5">
                    <div className="company">
                        <div className="font-bold text-xl max-w-fit">
                            <h1>Company</h1>
                            <div className="py-px bg-yellow-300 mt-2 rounded-full" />
                        </div>
                        <ul className="mt-4 flex flex-col pb-4">
                            <li className="rounded-md py-2 px-2 cursor-pointer">
                                About Us
                            </li>
                            <li className="rounded-md py-2 px-2 cursor-pointer">
                                Home
                            </li>
                            <li className="rounded-md py-2 px-2 cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="Products">
                        <div className="font-bold text-xl max-w-fit">
                            <h1>Products</h1>
                            <div className="py-px bg-yellow-300 mt-2 rounded-full" />
                        </div>
                        <ul className="mt-4 flex flex-col">
                            <li className="rounded-md py-2 px-2 cursor-pointer">
                                About Us
                            </li>
                            <li className="rounded-md py-2 px-2 cursor-pointer">
                                Home
                            </li>
                            <li className="rounded-md py-2 px-2 cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="service">
                        <div className="font-bold text-xl max-w-fit">
                            <h1>Service</h1>
                            <div className="py-px bg-yellow-300 mt-2 rounded-full" />
                        </div>
                        <ul className="mt-4 flex flex-col">
                            <li className=" rounded-md py-2 px-2 cursor-pointer">
                                About Us
                            </li>
                            <li className=" rounded-md py-2 px-2 cursor-pointer">
                                Home
                            </li>
                            <li className=" rounded-md py-2 px-2 cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <div className="font-bold text-xl max-w-fit">
                            <h1>Social</h1>
                            <div className="py-px bg-[#97c93e] mt-2 rounded-full" />
                        </div>
                        <ul className="mt-4 flex gap-x-2 sm:gap-x-4">
                            <li className="transition-all rounded-full w-10 h-10  md:w-14 md:h-14 cursor-pointer flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-facebook"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </li>
                            <li className="transition-al rounded-full w-10 h-10  md:w-14 md:h-14 cursor-pointer flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </li>
                            <li className="transition-all rounded-full  w-10 h-10  md:w-14 md:h-14 cursor-pointer flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-twitter"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-white font-thin py-3 border-t-2 border-gray-400 pt-1">
                    <p>made with ❤️ India</p>
                </div>
            </div>
        </div>

    )
}
