import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
 const product=props.product
  return (
    <div className="m-3 relative w-60 h-96 overflow-hidden rounded-lg shadow-lg box-border transition duration-300 transform hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-3/5 object-cover" />
      <div className="absolute bottom-0 w-full h-2/5 p-3 bg-slate-100 bg-opacity-50  border-black">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <div className="flex justify-between items-center mt-2">


         <Rating rating={product.rating} numreviews={product.numReviews}/>


            <span className="relative float-right">prix: {product.price}</span>
        </div>
  
        <Link to={`/product/${product._id}`} className="text-l pt-10 font-bold">plus d'info</Link>

      </div>
    </div>
  );
};

export default ProductCard;
