import HomePage from "../../components/Homepage";
import ServicesSection from "../../components/ServicesSection";
import Whyus from "../../components/HowitsWork";
import SupportedBanksSlider from "../../components/SupportedBanksSlider";
import TestimonialSlider from "../../components/Testimonials";
import CTASectionCombined from "../../components/about/cta";

export default function Home() {
  return (
      <>
         <HomePage />
         <ServicesSection />
         <Whyus />
         <SupportedBanksSlider />
         <TestimonialSlider />
         <CTASectionCombined />
      </>
  );
}
