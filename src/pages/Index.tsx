
import { useState } from "react";
import DropZone from "@/components/DropZone";
import CopyLinkCard from "@/components/CopyLinkCard";
import CyberHeader from "@/components/CyberHeader";
import BackgroundGrid from "@/components/BackgroundGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [fileLink, setFileLink] = useState<string | null>(null);

  const handleFileUploaded = (url: string) => {
    setFileLink(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundGrid />
      
      <div className="container mx-auto px-4 py-12 flex-1 flex flex-col">
        <CyberHeader />
        
        <div className="flex-1 flex flex-col justify-center items-center py-8">
          <DropZone onFileUploaded={handleFileUploaded} />
          {fileLink && <CopyLinkCard link={fileLink} />}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
