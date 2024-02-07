import React, { useContext } from 'react'
import { ProductContext } from '../context/productsContext'
import { Link } from 'react-router-dom';

function Card({ id, price, name, image_url, setSelected, popular }) {

    const { addToCart } = useContext(ProductContext);

    return (
        <Link to={`/singleProduct/${id}`}>
            <div className='relative border w-[295px] my-auto md:w-[300px] lg:w-[350px]' onClick={() => addToCart(id)}>
                <img src={image_url} alt="product image" className='h-[250px] hover:scale-110 transition-all duration-300 md:h-[300px] ' />
                <h2>{name}</h2>
                <h2>{price}</h2>
                {
                    popular && (
                        <div className='bg-red-500 text-white font-semibold absolute bottom-5 p-2'>Popular</div>
                    )
                }
            </div>
        </Link>
    )
}

export default Card