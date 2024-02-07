import React from 'react'
import coffee from '../assets/icon.webp';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.div
            initial={{ y: "-300px" }}
            animate={{ y: "0" }}
            transition={{ ease: "linear", duration: "2" }}
            className='w-full bg-transparent text-[#D5CEA3] flex justify-between items-center p-5 md:justify-center md:gap-[700px] md:py-2'>
            <div className='flex items-center'>
                <img src={coffee} alt="coffeeBean" className='w-[50px] md:w-[80px] lg:w-[90px]' />
                <p className='font-semibold md:text-xl lg:text-2xl'>Coffee<span className='text-[#E5E5CB]'>Shop</span></p>
            </div>
            <div>
                <ul className='flex gap-5 text-md font-semibold cursor-pointer md:text-xl'>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <a href="https://github.com/adityananu/coffeeshop">Github</a>
                </ul>
            </div>
        </motion.div>
    )
}

export default Header