import { useState } from "react";
import Home from "./Main_Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Sub_Component/Header";
import Footer from "./Sub_Component/Footer";
import NavigationBar from "./Sub_Component/NavigationBar";
import Layout from "./Main_Component/Layout";

import Fixed_Button from "./Sub_Component/Fixed_Button";
import ProductPage2 from "./Sub_Component/Page1/ProductPage2";
import SingleProductPage3 from "./Sub_Component/Page1/SingleProductPage3";


const App = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Layout>
       {/* <Header /> */}
        {/* <BrowserRouter> */}
        <NavigationBar />
        
        {/* <ProductPage2 /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage2" element={<ProductPage2/>} />
          <Route path="/singleProduct" element={<SingleProductPage3/>} />
          
       
        
        </Routes>
        {/* </BrowserRouter> */}
        <Fixed_Button />
        <Footer />
      </Layout>
    </>
  );
};

export default App;
