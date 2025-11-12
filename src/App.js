import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from './pages/Index';
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router basename="/asa"> {/* Replace 'asa' with your GitHub repo name if different */}
      <div className="App">
        <div className="max-w-[90%] md:max-w-[50%] mx-auto">
          <Routes>
            <Route path="/" element={<Index />} />         {/* ✅ Index page appears first */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


