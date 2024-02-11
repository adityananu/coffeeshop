import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Coffee from './CoffeeSection/Coffee';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import { motion } from 'framer-motion';
import { ProductContext } from '../context/productsContext';
import Testimonials from './Testimonials';
import Footer from './Footer';



export default function Layout() {
    const images = [image1, image2, image3];
    const { showPop, popMessage } = useContext(ProductContext);
    return (
        <>
            <main className='h-[90vh] w-full bg-[#FB5607] overflow-hidden relative'>
                <Header />
                <motion.div initial={{ y: "100px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} className='pacifico flex flex-col text-[#D5CEA3] items-center justify-center text-5xl h-[60vh] mx-auto md:text-6xl lg:text-8xl'>
                    <h1>Indulge in Pure</h1>
                    <h1>Coffee Bliss</h1>
                </motion.div>

                <motion.div
                    initial={{ y: "300px", opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='absolute bottom-[-100px] w-full flex items-center justify-center'>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className='h-[320px] w-[385px] hover:-translate-y-[100px] transition-all duration-500' />
                    ))}
                </motion.div>
            </main>
            {
                showPop && (
                    <div className='absolute bottom-[5rem] right-5 bg-[#333333] uppercase text-white px-7 py-5 rounded-md transition-all duration-500 transform translate-x-0'>
                        <h1>{popMessage}</h1>
                    </div>
                )
            }
            <Coffee />
            <Testimonials />
            <Footer />
        </>
    );
}
