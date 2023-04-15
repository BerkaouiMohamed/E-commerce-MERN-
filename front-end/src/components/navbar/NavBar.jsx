import mainlogo from '../../assets/sarou5logo.png'
import { useScroll,motion, useTransform } from 'framer-motion';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function NavBar() {
  const {scrollY}=useScroll()
  const navbarbackgroundcolor = useTransform(scrollY, [0, 100], ['#f0f0f035', '#ffffff'])
  return (
    <motion.div style={{backgroundColor:navbarbackgroundcolor , zIndex:'500'}}  className="navbarcontainer   fixed top-0 border-opacity-20 border-b border-black  px-5 justify-between items-center w-full h-14 flex space-x-4">
   <Link className='h-14 flex items-center' to={'/'}><img src={mainlogo}  alt="logo" className='h-4/5 '/></Link>
      
      <div className="Links w-1/3  text-blue-500  flex justify-center items-center font-bold ">
      <FaShoppingCart size={24} /><p className="underline pr-4">cart</p>
      <FaUser size={24} />  
        <p className="underline">signin</p>
      </div>
    </motion.div>
  
  );
}
 
export default NavBar;
