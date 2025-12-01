import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header/Index";
import Listing from "./Pages/Listing";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login Components/Login";
import LandingPage from "./Components/LandingPage";


function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
     <Route path="/" element={<LandingPage />} />
    <Route path="/home" exact={true} element={<Home/>} />
    <Route path="/cat/:id" exact={true} element={<Listing />} />
     <Route path="/login" element={<Login />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
