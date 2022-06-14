import ReactDOM from "react-dom/client";
import Header from "./components/main/Header"
import Main from "./components/main/Main"
import Catalog from "./components/catalog/Catalog";
import Product from "./components/product/Product";
import ProductOne from "./components/product/ProductOne";
import './index.css'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:catalogId" element={<Product />} />
        <Route path="/product/:productId" element={<ProductOne />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
