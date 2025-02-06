import LessonsTitlePage from "../components/LessonsTitlePage";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import PricingCard from "../components/pricingCard";

export const meta = () => {
    return [
      { title: 'Jenny Peña Music | Lessons' },
      { description: 'Jenny Peña Music Lessons' }
    ];
  };

  
export default function Lessons() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14">
            <LessonsTitlePage />    
            <Testimonials  />
            <div id="pricing-section" className="pt-16">
            <PricingCard />
            </div>
            <FAQ /> 
        </div>
    );
}