import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { SignUp } from "./pages/SignUpPage";
import { SignIn } from "./pages/SignInPage";
export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
}
export const BASE_URL="http://localhost:3000/api/v1/users"