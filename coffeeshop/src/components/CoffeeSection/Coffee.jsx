import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import { ProductContext } from "../../context/productsContext";

function Coffee() {
    const { productsList } = useContext(ProductContext);
    const [perPage, setPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const indexofLastProduct = currentPage * perPage;
    const indexofFirstProduct = indexofLastProduct - perPage;
    const currentProduct = productsList.slice(indexofFirstProduct, indexofLastProduct);
    const paginate = pageNumber => setCurrentPage(pageNumber);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='p-[1.5rem] bg-green-800 lg:p-10'>
            <div>
                <h1 className="text-white">Most popular</h1>
                <Slider {...settings}>
                    {productsList?.slice(3, 12).map((pro) => (
                        <Card key={pro._id} {...pro} popular={true} />
                    ))}
                </Slider>
            </div>
            <div className="w-full px-[100px] mt-10 flex flex-col items-center">
                <h1 className="text-white">Products</h1>
                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-0">
                    {currentProduct.map((products) => (
                        <Card key={products._id} {...products} />
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <ul className="flex text-white gap-5 justify-center">
                    {Array.from({ length: Math.ceil(productsList.length / perPage) }).map((_, index) => (
                        <li key={index} onClick={() => paginate(index + 1)} className="bg-slate-700 px-3 py-2 rounded-xl hover:opacity-90 transition-all ">
                            <button className="outline-none">
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Coffee;
