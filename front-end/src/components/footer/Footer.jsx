import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-yellow-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center mb-4">
          <a href="#" className="text-gray-800">
            <FaFacebook size={24} className="mr-4" />
          </a>
          <a href="#" className="text-gray-800">
            <FaTwitter size={24} className="mr-4" />
          </a>
          <a href="#" className="text-gray-800">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center text-gray-800">
          <p>Copyright &copy; 2023</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <svg
        className="w-full h-16"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill=" #1E90FF"
          d="M0,0 C350,120 700,80 5200,80 L1200,120 L0,120 Z"
        ></path>
      </svg>
    </footer>
  );
}

export default Footer;
