import Phone from "@/components/Icons/Phone";
import Email from "@/components/Icons/Email";
import Social from "@/components/Icons/Social";

export default function ContactIcons() {
  return (
    <div className="w-full mt-12">
      {/* Mobile view */}
      <div className="flex flex-col items-center space-y-8 md:hidden">
        <div className="flex justify-evenly items-center gap-x-8 w-full max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <Phone />
            <p className="mt-2 text-center font-medium">Phone</p>
            <p className="text-sm text-center">+1 (914) 772-0362</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Email />
            <p className="mt-2 text-center font-medium">Email</p>
            <p className="text-sm text-center">jack.aviles213@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Social />
            <p className="mt-2 text-center font-medium">Social</p>
          </div>
        </div>
      </div>
      
      {/* Desktop view */}
      <div className="hidden md:block relative">
        <div className="flex justify-evenly items-start gap-x-16 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Phone />
            <p className="mt-4 text-center font-medium">Phone</p>
            <p className="text-center">+1 (123) 456-7890</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Email />
            <p className="mt-4 text-center font-medium">Email</p>
            <p className="text-center">your.email@example.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Social />
            <p className="mt-4 text-center font-medium">Social</p>
          </div>
        </div>
      </div>
    </div>
  );
} 