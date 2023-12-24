import Home from "./Main_Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Sub_Component/Footer";
import NavigationBar from "./Sub_Component/NavigationBar";
import Fixed_Button from "./Sub_Component/Fixed_Button";
import ProductPage2 from "./Sub_Component/Page2/ProductPage2";
import SingleProductPage3 from "./Sub_Component/Page3/SingleProductPage3";
import Login from "./Sub_Component/Login";
import Register from "./Sub_Component/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productPage2" element={<ProductPage2 />} />
          <Route path="/singleProduct" element={<SingleProductPage3 />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        <Fixed_Button />
      
      </BrowserRouter>  <Footer />
    </>
  );
};

export default App;
