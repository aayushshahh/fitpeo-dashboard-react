import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeDashboard from "./pages/HomeDashboard";
import Analytics from "./pages/Analytics";
import Shop from "./pages/Shop";
import Performance from "./pages/Performance";
import Wallet from "./pages/Wallet";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-page-grid grid grid-cols-[auto_1fr]">
          <SideBar />
          <div className="second-column">
            <Header />
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/wallet" element={<Wallet />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
