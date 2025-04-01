"use client"

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function ResumePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 px-4 sm:px-8 flex flex-col items-center flex-grow">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a 
            href="/Resume.pdf" 
            download="Jack-Aviles-Resume.pdf"
            className="px-10 py-2 bg-[#0a192f] text-white rounded-full hover:bg-[#172a46] transition-colors"
          >
            Download PDF
          </a>
          
          <a 
            href="/Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-2 border border-[#0a192f] text-[#0a192f] rounded-full hover:bg-[#0a192f] hover:text-white transition-colors"
          >
            Open in New Tab
          </a>
        </div>
        
        <div className="w-full max-w-5xl h-[calc(100vh-180px)] border border-gray-300 rounded-lg overflow-hidden">
          {isMounted && !pdfError ? (
            <iframe 
              src="/Resume.pdf" 
              className="w-full h-full"
              title="Resume PDF"
              onError={() => setPdfError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-center px-4">
                {pdfError 
                  ? "Unable to display the PDF. Please use the buttons above to download or open the resume in a new tab."
                  : "Loading resume..."}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 