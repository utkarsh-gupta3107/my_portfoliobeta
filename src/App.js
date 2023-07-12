import React,{useState} from 'react';
import AcadProj from './AcadProj';
import Menu from './acadApi';
import Zenu from './WebApi';
import Home from './Home';
import Layout from './Layout';
import Footer from './Footer';
import WebDev from './WebDev';
import ComingSoon from './ComingSoon';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [menuData, setMenuData]= useState(Menu);
  const [ZenuData, setZenuData]= useState(Zenu);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"  index element={<Home />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path="Academics" element={<AcadProj menuData={menuData} />} />
          <Route path="WebDev" element={<WebDev menuData={ZenuData} />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="*"  element={<ComingSoon />} />

        </Route>
      </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
