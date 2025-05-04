
import React from "react";

const BackgroundGrid: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 cyber-grid z-[-1]"></div>
      <div
        className="fixed inset-0 z-[-2]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(0, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 100%, rgba(155, 48, 255, 0.15) 0%, transparent 50%)",
        }}
      ></div>
    </>
  );
};

export default BackgroundGrid;
