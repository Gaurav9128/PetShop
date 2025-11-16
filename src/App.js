import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header/Index";
import Listing from "./Pages/Listing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" exact={true} element={<Home/>} />
    <Route path="/cat/:id" exact={true} element={<Listing />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
