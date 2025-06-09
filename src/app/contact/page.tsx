import Navbar from "@/components/Navbar";
import Image from "next/image";
import Phone from "@/components/Icons/Phone";
import Email from "@/components/Icons/Email";
import Social from "@/components/Icons/Social";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="py-16 flex flex-col items-center min-h-screen relative">
        <Navbar />
        {/* Contact Card with fade-in */}
        <div className="page-content">
          <article className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-10 mt-2.5">
            {/* Left Side: Contact Information */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Me</h2>
              <div className="flex items-center space-x-3">
                <Email />
                <a href="mailto:jack.aviles213@gmail.com" className="text-lg text-gray-900 hover:underline">Email</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone />
                <span className="text-lg text-gray-900">914-772-0362</span>
              </div>
              <div className="flex items-center space-x-3">
                <Social />
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 hover:underline">LinkedIn</a>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4 self-stretch" />
            {/* Right Side: Headshot */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image 
                src="/Pro-Headshot.png" 
                alt="Pro-Headshot"
                width={140}
                height={140}
                className="w-36 h-36 rounded-full object-cover border-2 border-gray-200" 
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
