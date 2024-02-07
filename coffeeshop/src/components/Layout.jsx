import React from 'react';
import Header from './Header';
import Coffee from './CoffeeSection/Coffee';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';
// import image5 from '../assets/image5.jpg';
import { motion } from 'framer-motion';


export default function Layout() {
    const images = [image1, image2, image3];

    return (
        <>
            <main className='h-[90vh] bg-[#3C2A21] overflow-hidden relative'>
                <Header />
                <div className='flex flex-col text-[#D5CEA3] items-center justify-center text-5xl h-[60vh] mx-auto md:text-6xl lg:text-7xl'>
                    <h1>Indulge in Pure</h1>
                    <h1>Coffee Bliss</h1>
                </div>

                <motion.div
                initial={{y:"300px",opacity:0}}
                animate={{y:'0',opacity:1}}
                transition={{duration:2}}
                className='absolute bottom-[-100px] w-full flex items-center justify-center'>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className='h-[320px] w-[385px] hover:-translate-y-[100px] transition-all duration-500' />
                    ))}
                </motion.div>
            </main>

            <Coffee />
        </>
    );
}
