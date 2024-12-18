// App.jsx
import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./designs/App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
}

export default App;
