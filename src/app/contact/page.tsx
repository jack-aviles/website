import Navbar from "@/components/Navbar";
import Rectangle from "@/components/Rectangle";
import Image from "next/image";
import Phone from "@/components/Icons/Phone";
import Email from "@/components/Icons/Email";
import Social from "@/components/Icons/Social";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section id="contact" className="py-16 flex flex-col items-center min-h-screen relative">
        <Navbar /> 
        <Rectangle />
        <div className="mt-[100px] sm:mt-[120px] flex justify-center">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]">
            <Image 
              src="/Pro-Headshot.png" 
              alt="Pro-Headshot"
              fill
              sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
              className="rounded-full object-cover z-10"
            />
          </div>
        </div>
        
        <section className="flex flex-col md:flex-row gap-8 md:gap-20 mt-12 items-center md:items-start md:self-center">
          <div className="flex flex-col items-center">
            <Phone />
            <span className="mt-2">+1 914-772-0362</span>
          </div>
          <div className="flex flex-col items-center">
            <Email />
            <span className="mt-2">jack.aviles213@gmail.com</span>
          </div>
          <Social />
        </section>
      </section>
    </main>
  );
}
