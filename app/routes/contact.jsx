import ContactForm from "../components/Contactus"; 

export const meta = () => {
    return [
        {title: 'Jenny Peña Music | Contact Us'},
        {description: 'Contact Jenny Peña Music'},
    
    ];
    };

export default function Contact() {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center mt-9">
            <h1 className="text-center text-5xl font-bold">Contact Us</h1>
                <ContactForm />
        </div>
    );
}