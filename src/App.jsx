import {Routes, Route, useLocation} from "react-router-dom";
import Menubar from "./components/MenuBar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItem from "./pages/ManageItem/ManageItem";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import {Toaster} from "react-hot-toast";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  const location =  useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Menubar/>}
        <Toaster/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/category" element={<ManageCategory/>}/>
          <Route path="/items" element={<ManageItem/>}/>
          <Route path="/users" element={<ManageUsers/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}
export default App;
