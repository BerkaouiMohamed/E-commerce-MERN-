import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderPart from "../components/homecomps/HeaderPart";
import ProductSlider from "../components/productslider/ProductSlider";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { listProducts } from "../redux/actions/productActions";
import Loader from "../components/loader/Loader";


function HomePage() {
  const productList=useSelector(state=>state.productList)
  const {loading,error,products}=productList
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(listProducts())
  },[dispatch])
  return (
    <div className="homecontainer relative  ">
     {loading?<Loader/> :error?<h1>{error}</h1>:<>
  <ProductSlider productes={products}/>  <HeaderPart />
  <br/>  <br/>
  <ProductSlider productes={products}/>
  <ProductSlider productes={products}/>  <HeaderPart />
  <ProductSlider productes={products}/>
  <ProductSlider productes={products}/></>
}
    </div>
  );
}

export default HomePage;
