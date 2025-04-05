import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componants/header"; // Optional: Add Navbar for navigation
import Footer from "./componants/footer";
import Home from "./pages";
import Contact from "./pages/contact-us";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import Service from "./pages/service";
import TradingTools from "./pages/tradingtools";

function App() {
  return (
    <Router>
      <Header /> {/* Common Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tradingtool" element={<TradingTools />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
