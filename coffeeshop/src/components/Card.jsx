import React, { useContext } from 'react'
import { ProductContext } from '../context/productsContext'
import { Link } from 'react-router-dom';

function Card({ _id, price, name, image_url, setSelected, popular }) {

    const { addToCart } = useContext(ProductContext);

    return (
        <>
            {popular ? (
                <div className='relative my-auto'>
                    <img src={image_url} alt="product image" className='hover:scale-110 transition-all duration-300 md:h-[300px]' />
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <div className='bg-red-500 text-white font-semibold absolute bottom-14 p-2'>Popular</div>
                </div>
            ) : (
                    <div className='relative w-[295px] my-auto md:w-[300px] lg:w-[350px]'>
                        <Link to={`/singleProduct/${_id}`}>
                        <div className='relative'>
                            <img src={image_url} alt="product image" className='hover:scale-110 transition-all duration-300 md:h-[300px]' />
                            <h2>{name}</h2>
                            <h2>{price}</h2>
                        </div>
                        </Link>
                    <div className='flex gap-5'>
                        <button onClick={() => addToCart(id)} className='px-3 bg-slate-500'>add to cart</button>
                    </div>
                    </div>

            )}
        </>
    )
}

export default Card;
