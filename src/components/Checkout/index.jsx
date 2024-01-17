

export default function Checkout() {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-7">
                <div className="md:col-span-4 p-2 lg:col-span-5 md:pl-16">
                    <div className="p-1 rounded-md">
                        <div className="flex gap-x-6">
                            <div onClick={() => {}} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-white mb-5">

                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 1024 1024"
                                    className="icon"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                                            fill=""
                                        />
                                    </g>
                                </svg>


                            </div>
                            <p className="text-2xl font-bold">Shopping Cart (3 items)</p></div>
                        <ul className="mt-10 flex flex-col gap-5">
                            <li className="grid grid-cols-1 lg:grid-cols-2 p-5 shadow rounded-md gap-5">
                                <div className="flex gap-10 items-center">
                                    <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-gray-600 flex flex-col gap-2">
                                        <p className="text-xl">Ferragamo bag</p>
                                        <p className="text-sm">Tan, 40mm</p>
                                        <p className="text-sm underline cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4" /> Add Gift Wrapping.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-16 items-center">
                                        <select
                                            name=""
                                            id=""
                                            className="bg-gray-100 rounded-md px-2 border py-3"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        <p className="font-bold text-lg text-gray-600">$ 123</p>
                                    </div>
                                    <div className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-100">
                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M19 5L4.99998 19M5.00001 5L19 19"
                                                    stroke="#000000"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-3 lg:col-span-2 p-2 relative">
                    <div className="p-5 rounded-md border">
                        <p className="text-xl font-bold">Order Summary</p>
                        <ul className="p-0 mt-8 mb-5">
                            <li className="flex justify-between text-gray-600 mt-5">
                                <div>Subtotal</div>
                                <div className="font-medium">$ 123</div>
                            </li>
                            <li className="flex justify-between text-gray-600 mt-5">
                                <div>Shipping + Tax</div>
                                <div className="font-medium">$ 123</div>
                            </li>
                            <li className="flex justify-between text-gray-600 mt-5">
                                <div>Cupon Code</div>
                                <div className="font-medium uppercase">cupon123xnt</div>
                            </li>
                            <li className="flex justify-between text-gray-600 mt-5">
                                <div className="text-lg font-bold">Total</div>
                                <div className="font-black text-2xl">$ 123</div>
                            </li>
                        </ul>
                        <button className="py-2 bg-blue-400 w-full rounded-md text-white font-medium text-lg">
                            Checkout
                        </button>
                    </div>
                    <div className="mt-5">
                        <p className="font-bold text-center">
                            or <span className=" text-blue-400 hover:underline cursor-pointer">
                                continue shopping
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
