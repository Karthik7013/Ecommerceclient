import ProductCard from "../ProductCard"
export default function Collection() {
    return (
        <div>
            <div className="text-xl font-bold my-6 flex justify-between"><h1>Category</h1>
                <p className="text-base hover:underline hover:cursor-pointer">more</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-4">

                {[1, 2, 3, 4, 5].map((e, index) => {
                    return <ProductCard key={index} />
                })}
            </div>
        </div>

    )
}
