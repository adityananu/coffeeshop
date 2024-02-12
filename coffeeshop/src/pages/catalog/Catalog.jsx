import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import { ProductContext } from "../../context/productsContext";
import Card from "../../components/Card";

function Catalog() {
  const { productsList } = useContext(ProductContext);
  const catalog = true;

  return (
    <div>
      <Header />
      <div>
        
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col items-center lg:p-[50px]">
          <h1 className="text-2xl w-full text-center syne font-semibold mb-10 underline md:text-2.5xl lg:text-3xl">
            Products
          </h1>
          <div className="w-full mx-auto ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 ">
            {productsList?.map((products) => (
              <Card key={products._id} {...products} catalog={catalog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
