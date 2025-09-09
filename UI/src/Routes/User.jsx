import React from "react";
import Dashboard from "../User/Dashboard";
import LoginPage from "../User/Login";
import RegisterPage from "../User/Register";
import { Route, Routes } from "react-router-dom";
import TaskTime from "../User/TaskTime";

export const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/tasktime" element={<TaskTime />} />
      </Routes>
    </div>
  );
};
