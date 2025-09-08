import logo from './logo.svg';
import './App.css';
import LoginPage from './User/Login';
import RegisterPage from './User/Register';
// import Dashboard from './User/Dashboard';
import { Routes, Route } from "react-router-dom";
import TaskTime from './User/TaskTime';
import { User } from './Routes/User';
import { Admin } from './Routes/Admin';
import AdminDashboard from './Admin/AdminDashbord';
import AdminTaskTime from './Admin/AdminTaskTime';

function App() {
  return (
    <Routes>
       <Route path="/*" element={<User/>} />
       <Route path="/admin/*" element={<Admin/>}></Route> 
    </Routes>
    // <AdminDashboard/>
    // <AdminTaskTime/>
  );
}

export default App;
