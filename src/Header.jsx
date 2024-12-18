// src/components/Header.jsx
import reactLogo from "./assets/react.svg"; // go up one directory with ../
import viteLogo from "/vite.svg"; // this one is fine as it's in public

export default function Header() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logoReact" alt="React logo" />
      </a>
    </div>
  );
}
