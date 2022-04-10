import './App.css';
import Shop from './Components/Shop/Shop';
import OrderReview from './Components/OrderReview/OrderReview';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Login from './Components/Login/Login';
import Shipment from './Components/Shipment/Shipment';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import NotFound from './Components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';

// Contexts
export const reviewContext = createContext();
export const userContext = createContext();


function App() {
  const [productReview, setProductReview] = useState([]);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    photoUrl: ''
  })

  return (
    <userContext.Provider value={[user, setUser]} >
      <reviewContext.Provider value={[productReview, setProductReview]}  >
        <Router>
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/review" element={<OrderReview />} />
            <Route path="/manage" element={<ManageInventory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/productDetails/:productId" element={<ProductDetails />} />
            <Route exact path="/" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </reviewContext.Provider>
    </userContext.Provider>

  );
}


export default App;
