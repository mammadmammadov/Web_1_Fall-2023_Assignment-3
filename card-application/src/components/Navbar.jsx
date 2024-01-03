import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/Web_1_Fall-2023_Assignment-3">Home</NavLink>
        </li>
        <li>
          <NavLink to="/flashcards">Flashcards</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
