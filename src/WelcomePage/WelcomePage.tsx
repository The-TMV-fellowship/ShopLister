import { Link, Outlet } from "react-router-dom";
import AnimatedOrb from "./AnimatedOrb";
import "./WelcomePage.scss";

export default function WelcomePage() {
  return (
    <>
      <AnimatedOrb />
      <div className="welcome">
        <p className="welcome__message">Welcome to ShopLister</p>
        <div className="welcome__buttons">
          <Link to="/login" className="welcome__link">
            <button>Login</button>
          </Link>

          <Link to="/register" className="welcome__link">
            <button>Register</button>
          </Link>
        </div>
        <a className="welcome__guest" href="/">
          Continue as guest
        </a>
      </div>
    </>
  );
}
