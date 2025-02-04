import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <div
      className="hero"
      style={{
        height: "100vh",
        backgroundImage: "url(/assets/images/Jenny-Website-Grey.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-neutral-content text-right sm:text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Learn violin from anywhere with virtual lessons.</h1>
          <Link to="/lessons" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
  );
}