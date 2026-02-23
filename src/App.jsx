import Header from "./assets/layout/Header"
import Footer  from "./assets/layout/Footer"
import SwimmingForm from "./assets/Page/SwimmingForm";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Success } from "./assets/layout/Massege";
import { ToastContainer } from "react-toastify";
import Home from "./assets/Page/Home";
import Errorpage from "./assets/Page/Errorpage";
import Login from "./assets/Page/Login";
import Mainlayout from "./assets/layout/Mainlayout";
import Reagistation from "./assets/Page/Reagistation";



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
         <Route element={<Mainlayout />}>
           <Route path="/" element={<Home />} />
          <Route path="/swimming-form" element={<SwimmingForm />} />
          <Route path="*" element = {<Errorpage />} />
         </Route>
          <Route path="/Reagistation" element = {<Reagistation />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
        {/* <Home /> */}
        {/* <SwimmingForm /> */}
        {/* <Footer /> */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}
 

       

export default App