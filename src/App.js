import React from "react";
import { BrowserRouter as  Router , Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ItemsContainer from "./pages/shop/ItemsContainer";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from './context/shop-context'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/"  element={<ItemsContainer />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>

        <Footer />

      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
