import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/productsContext";
import { GiCoffeeCup } from "react-icons/gi";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productsList, addToCart, popUpMessage } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the given id
    const foundProduct = productsList.find((pro) => pro._id === id);
    setProduct(foundProduct);
  }, [id, productsList]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="border mt-[200px] lg:w-3/4 bg-white rounded-lg shadow-lg p-8 lg:mt-0">
        {product && (
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-8">
            {/* Product Image */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full lg:h-96 object-contain rounded-lg"
              />
            </div>
            {/* Product Details */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              {/* Product Name */}
              <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              {/* Product Description */}
              <p className="text-lg lg:text-xl text-gray-700 mb-4">
                {product.description}
              </p>
              {/* Product Price */}
              <p className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Price: ${product.price}
              </p>
              {/* Product Region */}
              <p className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Region: {product.region}
              </p>
              {/* Product Weight */}
              <p className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Weight: {product.weight}g
              </p>
              {/* Product Roast Level */}
              <p className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Roast Level: {product.roast_level}
              </p>
              {/* Flavor Profile */}
              <div className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Flavor Profile: {product.flavor_profile.join(", ")}
              </div>
              {/* Grind Options */}
              <div className="text-lg lg:text-xl text-gray-900 font-bold mb-4">
                Grind Options: {product.grind_option.join(", ")}
              </div>
              {/* Buttons: Add to Cart and Go Back */}
              <div className="flex flex-col lg:flex-row gap-4">
                <button
                  className="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg lg:text-xl mb-4 lg:mb-0 hover:opacity-80"
                  onClick={() => {
                    addToCart(product._id);
                    popUpMessage("Added to cart");
                    navigate("/");
                  }}
                >
                  Add to sip <GiCoffeeCup />
                </button>

                <Link to="/">
                  <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg text-lg lg:text-xl hover:opacity-80">
                    Go Back
                  </button>
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
