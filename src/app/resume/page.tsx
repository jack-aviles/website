import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 px-8 flex flex-col items-center flex-grow">
        <div className="flex items-center justify-center mb-6">
          <a 
            href="/Resume.pdf" 
            download="Jack-Aviles-Resume.pdf"
            className="px-10 py-2 bg-[#0a192f] text-white rounded-full hover:bg-[#172a46] transition-colors"
          >
            Download PDF
          </a>
        </div>
        
        <div className="w-full max-w-5xl h-[calc(100vh-180px)] border border-gray-300 rounded-lg overflow-hidden">
          <iframe 
            src="/Resume.pdf" 
            className="w-full h-full"
            title="Jack Aviles Resume"
          />
        </div>
      </div>
    </main>
  );
} 