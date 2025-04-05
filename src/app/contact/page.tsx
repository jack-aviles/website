import Navbar from "@/components/Navbar";
import Rectangle from "@/components/Rectangle";
import Image from "next/image";
import Phone from "@/components/Icons/Phone";
import Email from "@/components/Icons/Email";
import Social from "@/components/Icons/Social";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="py-16 flex flex-col items-center min-h-screen relative">
        <Navbar /> 
        <Rectangle />
        
        <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
          {/* Profile image */}
          <div className="mt-[100px] sm:mt-[120px]">
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
          
          {/* Contact information - stacked on mobile, side by side on desktop */}
          <div className="mt-12 w-full">
            {/* For mobile: stacked vertically */}
            <div className="flex flex-col items-center space-y-8 md:hidden">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <Email />
                </div>
                <span className="text-center">jack.aviles213@gmail.com</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <Phone />
                </div>
                <span className="text-center">+1 914-772-0362</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <Social />
                </div>
              </div>
            </div>
            
            {/* For desktop: side by side with email in center */}
            <div className="hidden md:block relative">
              <div className="absolute left-4 lg:left-1/4 top-0 flex flex-col items-center">
                <div className="mb-2">
                  <Phone />
                </div>
                <span className="text-center">+1 914-772-0362</span>
              </div>
              
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    <Email />
                  </div>
                  <span className="text-center">jack.aviles213@gmail.com</span>
                </div>
              </div>
              
              <div className="absolute right-4 lg:right-1/4 top-0 flex flex-col items-center">
                <div className="mb-2">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
