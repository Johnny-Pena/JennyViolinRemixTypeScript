import Hero from "../components/Hero";

export const meta = () => {
  return [
    { title: "Jenny Peña Music" },
    { name: "description", content: "Welcome to Jenny Peña Music" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}