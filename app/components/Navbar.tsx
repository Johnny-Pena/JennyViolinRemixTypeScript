import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from "@remix-run/react";

export default function Navbar() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "retro";
    }
    return "retro";
  });

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("retro");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html")?.setAttribute("data-theme", localTheme || "retro");
    }
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-300 z-50">
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              role="menu"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li role="menuitem"><Link to="/">Home</Link></li>
              <li role="menuitem"><Link to="/lessons">Lessons</Link></li>
              <li role="menuitem"><Link to="/lessons#pricing-section">Pricing</Link></li>
              <li role="menuitem"><Link to="/bio">Bio</Link></li>
              <li role="menuitem"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Jenny Peña Violin</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium" role="menubar">
            <li role="menuitem"><Link to="/">Home</Link></li>
            <li role="menuitem"><Link to="/lessons">Lessons</Link></li>
            <li role="menuitem"><Link to="/lessons#pricing-section">Pricing</Link></li>
            <li role="menuitem"><Link to="/bio">Bio</Link></li>
            <li role="menuitem"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
            <span className="mr-2">🌞</span>
            <input
              type="checkbox"
              className="toggle"
              onChange={handleToggle}
              checked={theme === "dracula"}
            />
            <span className="ml-2">🌚</span>
          </div>
          <Link to="/signUp" className="btn btn-primary ml-6 btn-sm lg:btn">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}