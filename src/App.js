// APP.JS
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from './Home'
import Products from './Products'
import Users from "./Users";
import NotFound from "./NotFound"


import ProductsLayout from './ProductsLayout';
import ProductDetails from './ProductDetails';
import Cart from "./Cart";


function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         {/* <Route path="/products" element={<Products/>}></Route> */}
         <Route path="/users" element={<Users/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="*" element={<NotFound/>}></Route>
         <Route path="/products">
          <Route index element={<Products/>}/>
          <Route path=":id" element={<ProductDetails/>}/>
         </Route>
          <Route path="/" element={<ProductsLayout />}>
          {/* <Route path="product/:id" element={<ProductDetails />} /> */}
        </Route>

      </Routes>
     
    </>
    
  );
}

export default App;
