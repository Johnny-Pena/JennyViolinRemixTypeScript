import BioComp from '../components/BioComp';
export const meta = () => {
  return [
    { title: "Jenny Peña Music | Bio" },
    { name: "description", content: "Learn about Jenny Peña, an experienced violin teacher and educator in Texas. Discover her collaborative teaching style and musical journey." },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, music biography, professional violinist, music achievements" },
    { property: "og:title", content: "Jenny Peña Music | Bio" },
    { property: "og:description", content: "Learn about Jenny Peña, an experienced violin teacher and educator in Texas. Discover her collaborative teaching style and musical journey." },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://jennypenaviolin.com/bio" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://jennypenaviolin.com/bio" }
  ];
};

export default function Bio() {
  return (
      <BioComp />
  );
}