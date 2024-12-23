import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import WritePage from "./pages/WritePage";
import Setting from "./pages/Setting";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Router } from "react-router";
import LoginPage from "./pages/LoginPage";

const app = () => {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <LoginPage />} />
          <Route path="/write" element={user ? <WritePage /> : <Register />} />

          <Route path="/setting" element={user ? <Setting /> : <Register />} />
          <Route path="/post/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default app;
