import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../productcard/Product";

function ProductSlider(props) {
    const products=props.productes
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        },
      },
    ],
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Latest Products</h2>
        <a href="/" className="text-gray-500 text-sm hover:text-gray-800">
          View All <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <Slider {...settings}>
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;