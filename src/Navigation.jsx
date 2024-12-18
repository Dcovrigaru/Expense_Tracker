import { useState } from "react";
import HomeSection from "./HomeSection";
import "./designs/Navigation.css";

function Navigation({ activeTab, setActiveTab }) {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const tabs = ["Home", "About", "Skills", "Projects"];

  const tabComponents = {
    Home: <HomeSection />,
    About: <div>About</div>,
    Skills: <div>Skills</div>,
    Projects: <div>Projects</div>,
  };

  const AuthForm = ({ isLogin, onClose }) => {
    return (
      <div className="auth-dropdown">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h3>{isLogin ? "Login" : "Sign Up"}</h3>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {!isLogin && <input type="password" placeholder="Confirm Password" />}
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        </form>
      </div>
    );
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="nav-container">
          <div className="tab-buttons-vertical">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  activeTab === tab ? "tab-button active" : "tab-button"
                }
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="auth-buttons">
            <button
              className="auth-button"
              onClick={() => {
                setIsLogin(true);
                setShowAuthForm(true);
              }}
            >
              Login
            </button>
            <button
              className="auth-button"
              onClick={() => {
                setIsLogin(false);
                setShowAuthForm(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="tab-content">{tabComponents[activeTab]}</div>
      </main>

      {showAuthForm && (
        <AuthForm isLogin={isLogin} onClose={() => setShowAuthForm(false)} />
      )}
    </div>
  );
}

export default Navigation;
