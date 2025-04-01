import Phone from '@/components/Icons/Phone';
import Navbar from '@/components/Navbar';
import Rectangle from '@/components/Rectangle';
import Email from '@/components/Icons/Email';
import Social from '@/components/Icons/Social';
import Image from 'next/image';
export default function ContactPage() {
  return (
    <main>
      <section id="contact" className="py-16 flex flex-col items-center min-h-screen relative">
        <Navbar /> 
        <Rectangle />
        <div className="mt-[55px] flex justify-center">
          <Image 
            src="/Pro-Headshot.png" 
            alt="Pro-Headshot" 
            className="w-[300px] h-[300px] rounded-full object-cover z-10"/>
        </div>
        <section className="flex gap-20 self-start ml-[28%]">
          <div className="flex flex-col items-center">
            <Phone />
            <span className="mt-[0px]">+1 914-772-0362</span>
          </div>
          <div className="flex flex-col items-center">
            <Email />
            <span className="mt-[-10px]">jack.aviles213@gmail.com</span>
          </div>
          <Social />
        </section>
      </section>
    </main>
  );
}
