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
        <section className='p-10'>
            <h1>Most popular</h1>

                <Slider {...settings}>
                    {
                        productsList?.slice(3, 12).map((pro) => (
                            <Card key={pro._id} {...pro} popular={true} />
                        ))
                    }
                </Slider>
            <section className="w-full">

                <h1>Products</h1>
                <div className=" h-[80vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {
                        currentProduct.map((products) => (
                            <Card key={products._id} {...products} />
                        ))
                    }
                </div>
                <ul className="flex text-white gap-5 justify-center ">
                    {Array.from({ length: Math.ceil(productsList.length / perPage) }).map((_, index) => (
                        <li key={index} className="bg-slate-700 p-3 rounded-xl hover:opacity-90 transition-all ">
                            <button onClick={() => paginate(index + 1)} className="outline-none">
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

        </section>
    )
}

export default Coffee