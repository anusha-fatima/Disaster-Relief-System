import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Precautions from "./Pages/Precautions";
import HelpLine from "./Pages/HelpLine";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./components/Footer";
import Emergency from "./components/Emergency";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes >
        <Route path='/' element={<Home />}/>
 
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/precautions" element={<Precautions />}/>
          <Route path="/help_line" element={<HelpLine />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
