import React from "react";
import { Ticket } from "lucide-react";

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 w-full px-4 z-40 md:hidden pointer-events-none">
      <div className="pointer-events-auto">
        <button className="w-full bg-brand-accent text-white font-bold py-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(55,72,123,0.5)] flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <Ticket className="animate-pulse" />
          <span>Hemen Kayıt Ol</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
