
import React, { useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { Upload, File, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type UploadState = "idle" | "uploading" | "success" | "error";

interface DropZoneProps {
  onFileUploaded: (url: string) => void;
}

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const DropZone: React.FC<DropZoneProps> = ({ onFileUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulate file upload
  const uploadFile = async (file: File) => {
    setUploadState("uploading");
    setFileName(file.name);

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "File too large",
        description: "Maximum file size is 50MB",
        variant: "destructive",
      });
      setUploadState("error");
      return;
    }
    
    // Simulate upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Generate a random file URL (would be replaced with actual upload URL)
        const fileId = Math.random().toString(36).substring(2, 15);
        setTimeout(() => {
          setUploadState("success");
          onFileUploaded(`https://cyberdrop.zone/${fileId}`);
        }, 500);
      }
      setProgress(currentProgress);
    }, 200);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      
      if (uploadState === "uploading") return;

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        uploadFile(files[0]);
      }
    },
    [uploadState]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        uploadFile(e.target.files[0]);
      }
    },
    []
  );

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className={`cyber-panel rounded-md p-8 transition-all duration-300 ${
          isDragging ? "drag-active cyber-glow" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileSelect}
        />

        {uploadState === "idle" && (
          <div className="text-center flex flex-col items-center space-y-4">
            <div className="w-24 h-24 rounded-full cyber-border p-4 flex items-center justify-center bg-cyber-background/60 mb-2">
              <Upload size={48} className="text-cyber-primary animate-float" />
            </div>
            <h3 className="text-2xl font-display font-bold text-cyber-foreground animate-text-glow">
              DROP FILES HERE
            </h3>
            <p className="text-cyber-foreground/70 max-w-md mx-auto">
              Drag and drop your files here or click to select. Max file size: 50MB.
            </p>
            <Button
              onClick={handleButtonClick}
              className="mt-4 bg-cyber-muted hover:bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-primary hover:text-cyber-foreground hover:cyber-glow transition-all duration-300"
            >
              Select File
            </Button>
          </div>
        )}

        {uploadState === "uploading" && (
          <div className="text-center">
            <File className="w-12 h-12 mx-auto mb-4 text-cyber-primary animate-pulse" />
            <h3 className="text-xl font-display font-bold text-cyber-foreground mb-2">
              UPLOADING...
            </h3>
            <p className="text-sm text-cyber-foreground/70 mb-4 truncate max-w-xs mx-auto">
              {fileName}
            </p>
            <Progress value={progress} className="h-2 mb-2 bg-cyber-muted">
              <div
                className="h-full bg-cyber-primary animate-pulse-glow"
                style={{ width: `${progress}%` }}
              />
            </Progress>
            <p className="text-cyber-primary font-cyber">{progress}%</p>
          </div>
        )}

        {uploadState === "success" && (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-display font-bold text-cyber-foreground mb-2">
              UPLOAD COMPLETE
            </h3>
            <p className="text-sm text-cyber-foreground/70 mb-4 truncate max-w-xs mx-auto">
              {fileName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropZone;
