import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/lib/animate/animate.min.css';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import './assets/css/Bootstrap.min.css';
import './assets/css/Style.css';


import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}>
       </Route>
     </Routes>
</BrowserRouter>
  );
}

export default App;
