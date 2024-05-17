
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout";
import Homepage from "./Pages/home/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
export default function Navigation(){
return(
<div className="Container">
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Shop" element={<Shop/>} />
          <Route path="Product" element={<Product/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
)
}
