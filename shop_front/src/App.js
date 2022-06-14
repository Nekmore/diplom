import React from "react"
import Header from "./components/main/Header"
import Footer from "./components/main/Footer"
import './styles/style.css'



import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

