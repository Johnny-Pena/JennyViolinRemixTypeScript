import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import type { LinksFunction } from "@remix-run/cloudflare";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "preload", href: "/assets/root-BmW-Yuzh.css", as: "style" },
  { rel: "stylesheet", href: "/assets/root-BmW-Yuzh.css" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project

    // Set the theme from localStorage on initial load
    const localTheme = localStorage.getItem("theme") || "retro";
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, []);

  return (
    <Layout>
      <Navbar />
      <Outlet />
      <Footer />
    </Layout>
  );
}