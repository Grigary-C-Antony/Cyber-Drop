
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundGrid from "@/components/BackgroundGrid";
import { FileX } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <BackgroundGrid />
      <div className="cyber-panel p-8 rounded-md max-w-md w-full text-center">
        <div className="cyber-border w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
          <FileX className="w-10 h-10 text-cyber-primary" />
        </div>
        <h1 className="text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary animate-text-glow">
          404
        </h1>
        <p className="text-xl text-cyber-foreground mb-8">
          File not found in the system
        </p>
        <Button
          asChild
          className="bg-cyber-muted hover:bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-primary hover:text-cyber-foreground hover:cyber-glow transition-all duration-300"
        >
          <a href="/">Return to Upload Zone</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
