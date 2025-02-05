import Hero from "../components/Hero";

export const meta = () => {
  return [
    { title: "Jenny Peña Violin" },
    { name: "description", content: "Welcome to Jenny Peña Violin" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}