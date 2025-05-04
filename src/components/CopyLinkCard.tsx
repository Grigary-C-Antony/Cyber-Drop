
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CopyLinkCardProps {
  link: string;
}

const CopyLinkCard: React.FC<CopyLinkCardProps> = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Link has been copied to your clipboard",
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cyber-panel rounded-md p-6 max-w-xl mx-auto mt-8 animate-fade-in">
      <h3 className="text-xl font-display text-cyber-foreground mb-4 animate-text-glow">
        YOUR ANONYMOUS FILE LINK
      </h3>
      <div className="flex items-stretch space-x-2">
        <div className="flex-1 bg-cyber-muted/80 border border-cyber-primary/20 rounded px-4 py-2 font-mono text-sm overflow-x-auto whitespace-nowrap text-cyber-primary">
          {link}
        </div>
        <Button
          onClick={handleCopy}
          className={`bg-cyber-muted hover:bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-foreground hover:cyber-glow transition-all duration-300 min-w-[4rem]`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </Button>
      </div>
      <p className="text-xs mt-4 text-cyber-foreground/60">
        This link will expire in 7 days. Anyone with this link can download your file.
      </p>
    </div>
  );
};

export default CopyLinkCard;
