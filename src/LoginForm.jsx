// src/LoginForm.jsx
function LoginForm({ isLogin, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {!isLogin && <input type="password" placeholder="Confirm Password" />}
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
