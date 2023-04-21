import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,HomePage,ProductPage,NavBar,Footer} from './routes'
import { AnimatePresence } from "framer-motion";
import CartPage from './pages/CartPage';




function App() {
  return (
    <div className=' App bg-blue-200' > 
        <AnimatePresence >
 
    <BrowserRouter>
     
  <NavBar/>
  <div className='pt-20'>
    <Routes >
      <Route path='/'  element={<HomePage/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/signup' element={<SignupPage/>}/>

<Route path="/product/:id" element={<ProductPage />} />
<Route path="/cart/:id" element={<CartPage />} />

    </Routes>
    </div>
    
        <Footer/>
    </BrowserRouter>
    </AnimatePresence>

    </div>
  );
}

export default App;
