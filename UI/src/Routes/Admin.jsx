import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashbord";
import AdminTaskTime from "../Admin/AdminTaskTime";

export const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashbord" element={<AdminDashboard />}></Route>
        <Route path="/tasktime" element={<AdminTaskTime />}></Route>
      </Routes>
    </div>
  );
};
