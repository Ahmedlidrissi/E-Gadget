/* 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout";
import Homepage from "./Pages/home/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Landing from "./Pages/landing page/landing";
import SignUp from "./Pages/Auth/signUp/SignUp";
import Login from "./Pages/Auth/signUp/login";
export default function Navigation(){
return(
<div >
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}>
          <Route index element={<Homepage />} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Landing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
)
}
 */