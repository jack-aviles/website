import Navbar from '@/components/Navbar';
import Rectangle from '@/components/Rectangle';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        <Rectangle />
        <Navbar />
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 md:mt-24">
          <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[330px] lg:h-[330px]">
            <Image 
              src="/Pro-Headshot.png" 
              alt="Pro-Headshot"
              fill
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 280px, 330px"
              className="rounded-full object-cover z-10" 
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 mt-6 text-center">Welcome to My Website!</h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-md text-center">
            I&apos;m a Digital Service & CX Analyst committed to enhancing user journeys through strategic thinking, data analysis, and thoughtful design. 
            I am currently expanding my knowledge in front-end development and exploring the integration of AI into UX.
          </p>
          <a href="/resume" className="inline-block">
            <button className="px-6 sm:px-8 md:px-12 lg:px-20 py-2 md:py-3 bg-[#0a192f] text-white text-lg sm:text-xl md:text-2xl font-medium rounded-full hover:bg-white hover:text-[#0a192f] transition-colors">
              Resume
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

