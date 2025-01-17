import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Customer/Home/Home"
import CustomerLayout from "./layout/CustomerLayout"
import './styles/App.css'
function App() {
 
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerLayout/>}>
            <Route path="/" element={<Home/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
