import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import UpButton from "./components/upButton.jsx";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import Page3 from "./components/Page3.jsx";
import Page4 from "./components/Page4/MachineFacility.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound";


// Lazy loaded components
// const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Page1 />} /> {/*Home */}
        <Route path="/product" element={<Page2 />} /> {/*Product Page */}
        <Route path="/about" element={<Page3 />} /> {/*Product Page */}
        <Route path="/facility" element={<Page4 />} /> {/*Product Page */}
        <Route path="*" element={<NotFound />} /> {/*backup*/}
      </Routes>
      <Footer />
      <UpButton />
    </>
  );
};

export default App;