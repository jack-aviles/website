import Navbar from '@/components/Navbar';
import Rectangle from '@/components/Rectangle';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        <Rectangle />
        <Navbar />
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <Image 
            src="/Pro-Headshot.png" 
            alt="Pro-Headshot" 
            className="w-[250px] h-[250px] md:w-[330px] md:h-[330px] max-w-full rounded-full object-cover relative z-10" 
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-4 text-center">Welcome to My Website!</h1>
          <p className="text-base md:text-lg mb-6 max-w-md text-center px-4">
            I&apos;m a Digital Service & CX Analyst focused on improving user journeys through strategy, data, and design. 
            Currently expanding my expertise in front-end development and AI-driven UX.
          </p>
          <a href="/resume">
            <button className="px-10 md:px-20 py-2 md:py-3 bg-[#0a192f] text-white text-xl md:text-2xl font-medium rounded-full hover:bg-white hover:text-[#0a192f] transition-colors">
              Resume
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

