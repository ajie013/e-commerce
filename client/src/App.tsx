import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Customer/Home/Home"
import CustomerLayout from "./layout/CustomerLayout"
import './styles/App.css'
import Shop from "./pages/Customer/Shop/Shop"
function App() {
 
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerLayout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
