import { Routes, Route } from "react-router-dom";
import Menubar from "./components/MenuBar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItem from "./pages/ManageItem/ManageItem";
import ManageUsers from "./pages/ManageUsers/ManageUsers";

const App = () => {
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/category" element={<ManageCategory/>}/>
        <Route path="/items" element={<ManageItem/>}/>
        <Route path="/users" element={<ManageUsers/>}/>
      </Routes>
    </div>
  )
}
export default App;
