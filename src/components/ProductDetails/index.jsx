import ProductCard from "../ProductCard"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function ProductDetails() {
    let { id } = useParams();
    let userId = "65a81b64c6f7cb1d9f61b8f4";
    let navigate = useNavigate()
    let [quantity, setQuantity] = useState(1)
    let [similarProducts, setSimilarProducts] = useState([]);
    let [product, setProduct] = useState();


    function handleCount(action) {
        if (action === 'increase') {
            setQuantity((prev) => prev + 1)
        } else {
            setQuantity((prev) => prev > 1 ? prev - 1 : prev)
        }
    }

    async function getSimilarProducts(category) {
        let res = await axios.get(`https://myshopee-ba54.onrender.com/products/category/${category}`);
        setSimilarProducts(res.data)
    }

    async function getProductDetails() {
        let res = await axios.get(`https://myshopee-ba54.onrender.com/products/${id}`)
        setProduct(res.data);
        getSimilarProducts(res.data.category);
    }


    useEffect(() => {
        getProductDetails()
    }, [id])


    return (
        <>
            <Navbar />
            <div className="bg-gray-50">
                <div className="py-6 px-6 pt-5 md:px-20 lg:px-26">
                    <div onClick={() => { navigate('/') }} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-white mb-5">

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
                    {
                        product !== undefined ? <>
                            <div className="m-auto max-w-[300px] overflow-hidden rounded-md">
                                <img
                                    src={product.image}
                                    alt=""
                                />
                            </div>
                            <div className="mt-5 text-xl font-bold text-gray-900">
                                {product.title}
                            </div>
                            <div className="mt-5 text-lg font-bold text-gray-600">
                                <p>£{product.price}</p>
                            </div>
                            <div>
                                <p className="max-w-[600px]">
                                    {
                                        product.description
                                    }
                                </p>
                            </div>
                            <div className="mt-5">
                                <div className="text-xl font-bold text-gray-900">Quantity</div>
                                <div className="mt-2 flex gap-x-6">
                                    <div className="flex max-w-40 justify-between rounded-md border p-2 gap-x-2">
                                        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-gray-600 font-bold text-white" onClick={() => { handleCount('decrease') }}>
                                            -
                                        </div>
                                        <div className="flex h-8 w-8 items-center justify-center">{quantity}</div>
                                        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-gray-600 font-bold text-white" onClick={() => { handleCount('increase') }}>
                                            +
                                        </div>
                                    </div>
                                    <div className="flex cursor-pointer items-center justify-center rounded-full border bg-pink-600 text-white px-4 hover:bg-pink-700">
                                        <div className="flex items-center gap-x-1">
                                            <svg
                                                fill="#fff"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z"></path>
                                                </g>
                                            </svg>
                                            <p>Favourite</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="mt-5 rounded p-2 text-gray-500 bg-gray-100 flex flex-col gap-3">
                                <li className="flex gap-x-3">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 1024 1024"
                                        className="icon"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#000000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M731.25 547.39v72.93H475.06v54.59c0 19.89 4.93 38.51 13.04 55.34h-38.49l-194.73-128c-28.84-18.98-65.64-20.57-96.07-4.18a93.73 93.73 0 0 0-49.29 82.57c0 32.05 16.09 61.54 43.04 78.88l238.79 153.77h339.9v36.57H914.1V547.39H731.25z m-318.4 292.75l-220.7-142.12a20.6 20.6 0 0 1-9.48-17.38c0-11.12 7.59-16.43 10.86-18.2 3.29-1.73 11.88-5.18 21.18 0.91l213.02 140.04h230.7v-73.14h-0.71v-0.04h-54.2c-23.98 0-44.46-15.36-52.11-36.75h179.85v146.68H412.85z m428.11 36.57h-36.57V620.53h36.57v256.18zM232.17 501.66c-20.46-35.7-31.27-76.48-31.27-117.95C200.9 252.64 307.51 146 438.54 146 569.6 146 676.2 252.64 676.2 383.71c0 41.43-10.8 82.21-31.25 117.91l63.46 36.36c26.79-46.77 40.93-100.11 40.93-154.27 0-171.41-139.43-310.86-310.8-310.86S127.76 212.3 127.76 383.71c0 54.2 14.16 107.55 40.95 154.3l63.46-36.35z"
                                                fill="#000000"
                                            />
                                            <path
                                                d="M336.22 350.91l-48.78 54.48 136.73 122.47 170.36-195.97-55.22-48-121.64 139.97z"
                                                fill="#000000"
                                            />
                                        </g>
                                    </svg>
                                    No Refund
                                </li>
                                <li className="flex gap-x-3">
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
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3 3C1.34315 3 0 4.34315 0 6V15C0 16.3121 0.842366 17.4275 2.01581 17.8348C2.18436 19.6108 3.67994 21 5.5 21C7.26324 21 8.72194 19.6961 8.96456 18H15.0354C15.2781 19.6961 16.7368 21 18.5 21C20.3201 21 21.8156 19.6108 21.9842 17.8348C23.1576 17.4275 24 16.3121 24 15V10.7515C24 10.0248 23.7362 9.32283 23.2577 8.77596L20.8502 6.02449C20.2805 5.37344 19.4576 5 18.5925 5H16.8293C16.4175 3.83481 15.3062 3 14 3H3ZM4 17.4361V17.5639C4.03348 18.3634 4.69224 19.0013 5.5 19.0013C6.30776 19.0013 6.96652 18.3634 7 17.5639V17.4361C6.96652 16.6366 6.30776 15.9987 5.5 15.9987C4.69224 15.9987 4.03348 16.6366 4 17.4361ZM5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H15.3368C15.8985 14.8175 17.1038 14 18.5 14C19.8245 14 20.9771 14.7357 21.5716 15.8207C21.8306 15.64 22 15.3398 22 15V11H17C15.8954 11 15 10.1046 15 9V6C15 5.44772 14.5523 5 14 5H3C2.44772 5 2 5.44772 2 6V15C2 15.3398 2.16945 15.64 2.42845 15.8207C3.02292 14.7357 4.17555 14 5.5 14ZM17 7V8C17 8.55229 17.4477 9 18 9H20.7962L19.345 7.34149C19.1552 7.12448 18.8808 7 18.5925 7H17ZM17 17.4361V17.5639C17.0335 18.3634 17.6922 19.0013 18.5 19.0013C19.3078 19.0013 19.9665 18.3634 20 17.5639V17.4361C19.9665 16.6366 19.3078 15.9987 18.5 15.9987C17.6922 15.9987 17.0335 16.6366 17 17.4361Z"
                                                fill="#0F0F0F"
                                            />
                                        </g>
                                    </svg>
                                    Free shipping + returns
                                </li>
                                <li className="flex gap-x-3">
                                    <svg
                                        fill="#000000"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M14.6,21.3c-.3.226-.619.464-.89.7H16a1,1,0,0,1,0,2H12a1,1,0,0,1-1-1c0-1.5,1.275-2.456,2.4-3.3.75-.562,1.6-1.2,1.6-1.7a1,1,0,0,0-2,0,1,1,0,0,1-2,0,3,3,0,0,1,6,0C17,19.5,15.725,20.456,14.6,21.3ZM23,15a1,1,0,0,0-1,1v3H21a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h1v2a1,1,0,0,0,2,0V16A1,1,0,0,0,23,15ZM13,12V7a1,1,0,0,0-2,0v4H8a1,1,0,0,0,0,2h4A1,1,0,0,0,13,12ZM23,2a1,1,0,0,0-1,1V5.374A12,12,0,1,0,7.636,23.182,1.015,1.015,0,0,0,8,23.25a1,1,0,0,0,.364-1.932A10,10,0,1,1,20.636,7H18a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V3A1,1,0,0,0,23,2Z"></path>
                                        </g>
                                    </svg>
                                    We’re here for you 24/7
                                </li>
                            </ul>
                            <div className="mt-6 pb-6 flex gap-x-2">
                                <button onClick={() => { navigate(`/checkout/${userId}`) }} className="hover:bg-blue-100 flex text-center gap-x-2 items-center justify-center text-blue-600 w-full  cursor-pointer rounded border-blue-600 border  px-5 py-2 font-bold ">
                                    Buy Now
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
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M13 12H21M21 12L17.16 8M21 12L17.16 16"
                                                stroke="#2563eb"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7 13C6.33333 14.6667 5.33333 16.3333 4 17H10.3333C10.3333 17 11.3333 17 12 16.3333"
                                                stroke="#2563eb"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M9.66667 13H3"
                                                stroke="#2563eb"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13"
                                                stroke="#2563eb"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </button>
                                <button className="flex items-center justify-center gap-x-2 hover:bg-blue-500 w-full  cursor-pointer rounded bg-blue-600 px-5 py-2 font-bold text-white">
                                    Add to Cart
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
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M2.08416 2.7512C2.22155 2.36044 2.6497 2.15503 3.04047 2.29242L3.34187 2.39838C3.95839 2.61511 4.48203 2.79919 4.89411 3.00139C5.33474 3.21759 5.71259 3.48393 5.99677 3.89979C6.27875 4.31243 6.39517 4.76515 6.4489 5.26153C6.47295 5.48373 6.48564 5.72967 6.49233 6H17.1305C18.8155 6 20.3323 6 20.7762 6.57708C21.2202 7.15417 21.0466 8.02369 20.6995 9.76275L20.1997 12.1875C19.8846 13.7164 19.727 14.4808 19.1753 14.9304C18.6236 15.38 17.8431 15.38 16.2821 15.38H10.9792C8.19028 15.38 6.79583 15.38 5.92943 14.4662C5.06302 13.5523 4.99979 12.5816 4.99979 9.64L4.99979 7.03832C4.99979 6.29837 4.99877 5.80316 4.95761 5.42295C4.91828 5.0596 4.84858 4.87818 4.75832 4.74609C4.67026 4.61723 4.53659 4.4968 4.23336 4.34802C3.91052 4.18961 3.47177 4.03406 2.80416 3.79934L2.54295 3.7075C2.15218 3.57012 1.94678 3.14197 2.08416 2.7512Z"
                                                fill="#ffffff"
                                            />
                                            <path
                                                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                                                fill="#ffffff"
                                            />
                                            <path
                                                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                                                fill="#ffffff"
                                            />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <div className="">
                                <div className="mt-5 text-xl font-bold text-gray-900">
                                    Similar Products
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-4">
                                    {
                                        similarProducts !== undefined ? similarProducts.map((e, index) => {
                                            return <ProductCard key={index} data={e} />
                                        }) : <>loading...</>
                                    }
                                </div>
                            </div>
                        </> : <>loading</>
                    }
                </div>
            </div >
            <Footer />
        </>


    )
}
