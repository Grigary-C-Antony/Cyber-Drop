
import React from "react";
import { Github, Shield, Lock } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-cyber-foreground/60 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Cyber Drop Zone. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8">
            <div className="flex items-center">
              <Shield size={14} className="mr-2 text-cyber-primary" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center">
              <Lock size={14} className="mr-2 text-cyber-primary" />
              <span>End-to-End Encrypted</span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-cyber-primary transition-colors"
            >
              <Github size={14} className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
