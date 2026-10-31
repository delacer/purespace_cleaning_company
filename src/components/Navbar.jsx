
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Leaf, ArrowUpRight } from "lucide-react";
import { company } from "../data";
import "../styles/Navbar.css";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About us", "/about"],
  ["Gallery", "/gallery"],
  ["Booking", "/booking"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  return (
    <header className="navbar" onKeyDown={handleKeyDown}>
      <div className="nav-inner wrap">
        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label={`${company.name} home`}
        >
          <span className="brand-mark">
            <Leaf size={22} />
          </span>

          <span>
            {company.name}
            <small>CARE IN EVERY DETAIL</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="main-navigation"
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            className="nav-cta"
            to="/booking"
            onClick={closeMenu}
          >
            Book a cleaning
            <ArrowUpRight size={16} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
