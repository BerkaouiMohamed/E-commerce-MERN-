import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';

function CartPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qty = queryParams.get('qty');

  const handleDeleteFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      {cartItems.map((item) => (
        <motion.div
          className="flex items-center border-b py-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          key={item.product}
        >
          <div className="w-16 h-16 relative">
            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 px-4">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-500 text-sm">ID: {item.product}</p>
          </div>
          <div className="w-56 flex-shrink-0">
            <div className="flex items-center justify-between border rounded-md px-2 py-1">
              <span>Quantité : {item.qty}</span>
              <span>Prix : {item.qty > 1 ? item.price * item.qty : item.price}</span>
            </div>
          </div>
          <div className="w-20">
            <button onClick={() => handleDeleteFromCart(item.product)} className="text-red-500 text-lg">
              <FaTrashAlt className="w-4 h-6" />
            </button>
          </div>
        </motion.div>
      ))}
      {cartItems.length > 0 && (
        <div className="flex justify-end py-4">
          <div className="w-56 flex-shrink-0">
            <div className="flex items-center justify-between border rounded-md px-2 py-1">
              <span>Total : {totalPrice}</span>
            </div>
          </div>
          <div className="w-20">
            <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-md">Payer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
