import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Customer/Home/Home";
import CustomerLayout from "./layout/CustomerLayout";
import './styles/App.css';
import { Suspense, lazy } from "react";

// Lazy load the components
const Shop = lazy(() => import('./pages/Customer/Shop/Shop'));
const Login = lazy(() => import('./pages/Customer/Login/Login'));
const SignUp = lazy(() => import('./pages/Customer/SignUp/SignUp'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const ProductDetails = lazy(() => import('./pages/Customer/Shop/ProductDetails'));
const Cart = lazy(() => import('./pages/Customer/Cart/Cart'))
const About = lazy(() => import('./pages/Customer/About/About'))
const Contact = lazy(() => import('./pages/Customer/Contact/Contact'))


function App() {
  return (
    <> 
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<CustomerLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop/product/:id" element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;