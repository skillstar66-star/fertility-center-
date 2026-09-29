import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Treatments } from "@/components/sections/Treatments";
import { Doctors } from "@/components/sections/Doctors";
import { Consultation } from "@/components/sections/Consultation";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      
      {/* How it works simple section */}
      <Process />

      <Doctors />
      <Consultation />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
