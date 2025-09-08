import React from "react";
import { Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashbord";
import AdminTaskTime from "../Admin/AdminTaskTime";

export const Admin = () => {
  return (
    <div>
      <Routes>
        <Routes path="/dashboard" element={<AdminDashboard />}></Routes>
        <Routes path="/tasktime" element={<AdminTaskTime />}></Routes>
      </Routes>
    </div>
  );
};
