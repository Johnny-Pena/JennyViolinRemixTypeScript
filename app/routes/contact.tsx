import ContactForm from "../components/Contactus"; 

export const meta = () => {
    return [
        { title: "Jenny Peña Music | Contact Us" },
        { name: "description", content: "Get in touch with Jenny Peña Music. Contact us for violin lessons, inquiries, and more." },
        { name: "keywords", content: "Jenny Peña, contact, violin lessons, music inquiries, professional violinist" },
        { property: "og:title", content: "Jenny Peña Music | Contact Us" },
        { property: "og:description", content: "Get in touch with Jenny Peña Music. Contact us for violin lessons, inquiries, and more." },
        { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
        { property: "og:url", content: "https://jennypenaviolin.com/contact" }, 
        { property: "og:type", content: "website" },
        { rel: "canonical", href: "https://jennypenaviolin.com/contact" }
    ];
    };

export default function Contact() {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center mt-9">
            <h1 className="text-center text-5xl font-bold md: text-2xl">Contact Us</h1>
                <ContactForm />
        </div>
    );
}