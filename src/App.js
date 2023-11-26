import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <div className="App">
      <RootLayout />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
