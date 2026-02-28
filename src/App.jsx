import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Weather from "./pages/Weather";
import Learning from "./pages/Learning";
import CropDiagnosis from "./pages/CropDiagnosis";
import Mentorship from "./pages/Mentorship";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/marketplace" element={
        <ProtectedRoute>
          <Marketplace />
        </ProtectedRoute>
      } />
      
      <Route path="/weather" element={
        <ProtectedRoute>
          <Weather />
        </ProtectedRoute>
      } />
      
      <Route path="/learning" element={
        <ProtectedRoute>
          <Learning />
        </ProtectedRoute>
      } />
      
      <Route path="/crop-diagnosis" element={
        <ProtectedRoute>
          <CropDiagnosis />
        </ProtectedRoute>
      } />
      
      <Route path="/mentorship" element={
        <ProtectedRoute>
          <Mentorship />
        </ProtectedRoute>
      } />
      
      <Route path="/community" element={
        <ProtectedRoute>
          <Community />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App