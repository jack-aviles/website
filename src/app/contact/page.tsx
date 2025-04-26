import Navbar from "@/components/Navbar";
import Rectangle from "@/components/Rectangle";
import Image from "next/image";
import ContactIcons from "@/components/ContactIcons";
export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="py-16 flex flex-col items-center min-h-screen relative">
        <Navbar />
        <Rectangle />
        
        <div className="page-content">
          {/* Center the headshot both vertically and horizontally */}
          <div className="mt-[100px] sm:mt-[100px]">
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]">
              <Image 
                src="/Pro-Headshot.png" 
                alt="Pro-Headshot"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="page-content">
          <ContactIcons />
        </div>
      </section>
    </main>
  );
}
