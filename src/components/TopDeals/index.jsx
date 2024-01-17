import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";

export default function TopDeals() {
    let [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            let res = await axios.get('https://myshopee-ba54.onrender.com/products/all');
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <div className="text-xl font-bold my-6 flex justify-between"><h1>Top Deals</h1>
                <p className="text-base hover:underline hover:cursor-pointer">more</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard key={index} data={product} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
