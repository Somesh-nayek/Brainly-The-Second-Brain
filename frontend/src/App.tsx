import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/DashboardPage";
import { SignUp } from "./pages/SignUpPage";
import { SignIn } from "./pages/SignInPage";
import { FriendDashboard } from "./pages/friendDashboard";
export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/YourFriend/:hash" element={<FriendDashboard/>}/>
  </Routes>
  </BrowserRouter>
}
