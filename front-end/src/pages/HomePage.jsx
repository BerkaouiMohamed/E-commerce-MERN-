import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderPart from "../components/homecomps/HeaderPart";
import Product from "../components/productcard/Product";
import ProductSlider from "../components/productslider/ProductSlider";
import axios from "axios";
import { useState,useEffect } from "react";

function HomePage() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const fetshProducts=async ()=>{
      const {data}=await axios.get('http://localhost:8000/api/products')
      console.log(data)
      setProducts(data)
    }
    fetshProducts()
  },[])
  return (
    <div className="homecontainer relative  ">
    
  <ProductSlider productes={products}/>  <HeaderPart />
  <br/>  <br/>
  <ProductSlider productes={products}/>
  <ProductSlider productes={products}/>  <HeaderPart />
  <ProductSlider productes={products}/>
  <ProductSlider productes={products}/>

    </div>
  );
}

export default HomePage;
