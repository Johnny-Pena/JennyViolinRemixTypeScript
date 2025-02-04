import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by Jenny Peña Violin</p>
      </aside>
    </footer>
  );
}