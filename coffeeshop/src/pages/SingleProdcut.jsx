import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/productsContext';

function SingleProduct() {
  const { id } = useParams();
  const { productsList } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching id
    const foundProduct = productsList.find((pro) => pro._id === id);
    setProduct(foundProduct);
  }, [id, productsList]);

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-100'>
      <div className='border w-5/6 lg:w-3/4 bg-white rounded-lg shadow-lg p-8'>
        {product && (
          <div className='flex flex-col lg:flex-row items-start lg:items-center lg:gap-8'>
            <div className='w-full lg:w-1/2'>
              <img src={product.image_url} alt={product.name} className='w-full h-auto lg:h-96 object-contain rounded-lg' />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-4">{product.description}</p>
              <p className="text-xl lg:text-2xl text-gray-900 font-bold mb-4">Price: ${product.price}</p>
              <p className="text-xl lg:text-2xl text-gray-900 font-bold mb-4">Region: {product.region}</p>
              <p className="text-xl lg:text-2xl text-gray-900 font-bold mb-4">Weight: {product.weight}g</p>
              <p className="text-xl lg:text-2xl text-gray-900 font-bold mb-4">Roast Level: {product.roast_level}</p>
              <div className="text-xl lg:text-2xl text-gray-900 font-bold mb-4">
                Flavor Profile: {product.flavor_profile.join(', ')}
              </div>
              <div className="text-xl lg:text-2xl text-gray-900 font-bold mb-4">
                Grind Options: {product.grind_option.join(', ')}
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg lg:text-xl">Add to Cart</button>
                <Link to="/">
                <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg text-lg lg:text-xl">Go Back</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
