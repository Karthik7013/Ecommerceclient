/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
export default function ProductCard({ data }) {
    // let dispatch = useDispatch()
    let navigate = useNavigate();
    function handleOnclick() {
        navigate(`/product-details/${data._id}`);
    }
    return (
        <div className="" >
            <div className="cursor-pointer w-full max-w-[200px] border rounded-md p-2 shadow-md" onClick={() => {
                handleOnclick()
            }}>
                <img
                    className="w-full h-full rounded-md mb-2 max-h-[230px]"
                    src={data?.image}
                    alt=""
                />
                <p className="text-md text-gray-700 font-bold truncate ...">
                    {data?.title}
                </p>
                <p className="text-gray-500 font-bold">{data?.price}</p>
            </div>
        </div>
    )
}
