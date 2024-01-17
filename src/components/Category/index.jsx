/* eslint-disable react/prop-types */


export default function Category({ searchBar, setSearchBar }) {

    return (
        <div className={`${searchBar ? 'hidden' : 'flex'} justify-center items-center p-4 bg-[#292929b0] fixed top-0 w-screen z-50 h-screen`}>
            <div className="relative max-w-xl mx-auto py-4 px-2 bg-white rounded-md rounded-tr-none shadow">
                <div className="bg-white shadow mx-auto rounded-lg grid grid-cols-2 sm:grid-cols-5 text-black p-2 gap-x-4">
                    <div className="cursor-pointer flex justify-center items-center flex-col py-2 bg-blue-100 rounded-md">
                        <div className="w-10 h-10"> <img src="https://ik.imagekit.io/ybyfbcvb8/mens.png?updatedAt=1705054358178" alt="" /></div>
                        <div>Mens</div>
                    </div>
                    <div className="rounded-md cursor-pointer flex justify-center items-center flex-col py-2">
                        <div className="w-10 h-10"> <img src="https://ik.imagekit.io/ybyfbcvb8/woman.png?updatedAt=1705054358108" alt="" /></div>
                        <div>Womens</div>
                    </div>
                    <div className="rounded-md cursor-pointer flex justify-center items-center flex-col py-2">
                        <div className="w-10 h-10"> <img src="https://ik.imagekit.io/ybyfbcvb8/son.png?updatedAt=1705054358145" alt="" /></div>
                        <div>kids</div>
                    </div>
                    <div className="rounded-md cursor-pointer flex justify-center items-center flex-col py-2">
                        <div className="w-10 h-10"> <img src="https://ik.imagekit.io/ybyfbcvb8/electronics.png?updatedAt=1705054358149" alt="" /></div>
                        <div>Electronics</div>
                    </div>
                    <div className="rounded-md cursor-pointer flex justify-center items-center flex-col py-2">
                        <div className="w-10 h-10"> <img src="https://ik.imagekit.io/ybyfbcvb8/boxes.png?updatedAt=1705054358175" alt="" /></div>
                        <div>Others</div>
                    </div>
                </div>
                <ul className="overflow-y-scroll max-h-[400px] text-black  mt-4 mx-auto rounded-lg grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>



                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-100 cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-md bg-blue-100">
                        <div className="w-16 bg-green-400 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className="overflow-hidden w-full text-nowrap">
                            <p className="text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, cons laborum distinctio
                                suscipit magni ex, porro officiis ad debitis recusandae. Perspiciatis fugiat et eius
                                asperiores debitis commodi impedit minima consequuntur repellat! Impedit.</p>
                            <p className="text-ellipsis overflow-hidden">Price : 500$</p>
                        </div>
                    </li>


                </ul>
                <div onClick={() => { setSearchBar(true) }} title="close" className="cursor-pointer bg-white -mr-10  absolute top-0 right-0 w-10 h-8 p-1 rounded-r-md">
                    <svg width="100%px" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-570.000000, -1089.000000)" fill="#d75050"> <path d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z" id="cross-circle"> </path> </g> </g> </g></svg>
                </div>
            </div>
        </div>
    )
}
