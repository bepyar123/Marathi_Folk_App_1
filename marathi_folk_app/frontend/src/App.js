
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FolkSongPrediction from "./pages/FolkSongPrediction";
import Timeline from "./pages/Timeline";
import CommunityForm from "./pages/CommunityForm";
import CultureExplorer from "./pages/CultureExplorer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import StoryTeller from "./pages/StoryTeller";
import Navbar from "./components/Navbar";   // ✅ Make sure this is imported

function App() {
  return (
    <AuthProvider>
      <Router>

        {/* 🌟 Navbar should ALWAYS be outside Routes */}
        <Navbar />

        {/* Push page content down so navbar doesn't overlap */}
        <div className="pt-[120px]">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/predict" element={<FolkSongPrediction />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/cultureexplorer" element={<CultureExplorer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/storytelling" element={<StoryTeller />} />

            {/* Protected Route */}
            <Route
              path="/communityform"
              element={
                <PrivateRoute>
                  <CommunityForm />
                </PrivateRoute>
              }
            />
          </Routes>

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
