
import React from "react";

const CyberHeader: React.FC = () => {
  return (
    <header className="py-8 mb-10">
      <div className="container">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary animate-text-glow">
          CYBER DROP ZONE
        </h1>
        <p className="text-center text-cyber-foreground/80 max-w-lg mx-auto">
          Anonymous file sharing platform with end-to-end encrypted transfers.
          No registration required. No tracking. No logs.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="cyber-border w-32 h-8 p-0 flex items-center justify-center">
            <span className="font-cyber text-xs text-cyber-primary">ENCRYPTED</span>
          </div>
          <div className="cyber-border w-32 h-8 p-0 flex items-center justify-center">
            <span className="font-cyber text-xs text-cyber-primary">ANONYMOUS</span>
          </div>
          <div className="cyber-border w-32 h-8 p-0 flex items-center justify-center">
            <span className="font-cyber text-xs text-cyber-primary">SECURE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CyberHeader;
