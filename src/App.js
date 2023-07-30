import HomePage from "./page/Home/HomePage";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBarLogin from "../src/components/Utility/NavBarLogin"
import Footer from "../src/components/Utility/Footer"
import LoginPage from "./page/Auth/LoginPage";
import Register from "./page/Auth/Register";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrand from "./page/Brand/AllBrand";
function App() {
  return (
    <div className="font" style={{minHeight:'670px'}}>
      <NavBarLogin/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/allCategory" element={<AllCategoryPage/>}/>
          <Route path="/allbrand" element={<AllBrand/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
