import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import EmployeePage from "./components/EmployeePage";
import OrganizationPage from "./components/OrganizationPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/organization" element={<OrganizationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
