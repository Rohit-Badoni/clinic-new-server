import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/lib/animate/animate.min.css';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import './assets/css/Bootstrap.min.css';
import './assets/css/Style.css';


import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Service from "./pages/Service.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <BrowserRouter basename='/clinic-react-app'>
    <Routes>
       <Route path="/" element={<Home />}>
       </Route>
       <Route path="/about-us" element={<About />}>
       </Route>
       <Route path="/service" element={<Service />}>
       </Route>
       <Route path="/contact" element={<Contact />}>
       </Route>
     </Routes>
</BrowserRouter>
  );
}

export default App;
