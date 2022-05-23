import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Adminboard from "./components/Adminboard/Adminboard";
import Documents from "./components/Documents/Documents";
import Users from "./components/Users/Users";
import Checker from "./components/Checker/Checker";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="documents" element={<Documents/>}/>
          <Route path="checker" element={<Checker/>}/>
        </Route>
        <Route path="/Adminboard" element={<Adminboard/>}>
          <Route path="documents" element={<Documents/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="checker" element={<Checker/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
