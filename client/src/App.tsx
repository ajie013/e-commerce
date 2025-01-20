import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Customer/Home/Home"
import CustomerLayout from "./layout/CustomerLayout"
import './styles/App.css'
import Shop from "./pages/Customer/Shop/Shop"
import Login from "./pages/Customer/Login/Login"
import SignUp from "./pages/Customer/SignUp/SignUp"
import NotFound from "./pages/NotFound/NotFound"
import ProductDetails from "./pages/Customer/Shop/ProductDetails"


function App() {
 
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerLayout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
            <Route path="/shop/product/:id" element={<ProductDetails/>}></Route>
          </Route>

          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
