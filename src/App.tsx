import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, Home, UserDetails, Users } from "./pages";
import Sidebar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
