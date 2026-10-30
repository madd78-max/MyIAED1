import React, { useState } from 'react';
import { HOTLINKED_ASSETS } from '../types';
import { Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onStartCreating: () => void;
  onViewDesigns: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartCreating,
  onViewDesigns,
}) => {
  const [imgSrc, setImgSrc] = useState(HOTLINKED_ASSETS.heroMockup);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-low transition-all duration-700 py-12 md:py-20">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, var(--emdash-primary, #0040e0) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, var(--emdash-secondary, #fd7d6c) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="md:col-span-6 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#e2e2e5] text-xs font-semibold text-primary shadow-xs">
            <span className="w-2 h-2 rounded-full bg-secondary-container" />
            <span>Taller Artesanal en Valencia · Entrega express 48h</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight">
            Tus dispositivos, <br />
            <span className="text-secondary-container">tu estilo.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
            Personalización experta en Valencia para quienes ven su tecnología como un lienzo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start items-center">
            <button
              onClick={onStartCreating}
              className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-secondary-container" />
              <span>Empieza a Crear</span>
            </button>
            <button
              onClick={onViewDesigns}
              className="w-full sm:w-auto border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-fixed/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-5 h-5" />
              <span>Ver Diseños</span>
            </button>
          </div>

          {/* Quiet Trust Metric Adjacency */}
          <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-xs text-on-surface-variant font-medium">
            <span>+12.000 carcasas producidas</span>
            <span aria-hidden="true">·</span>
            <span>Tintas ecológicas UV</span>
            <span aria-hidden="true">·</span>
            <span>Ajuste milimétrico 100%</span>
          </div>
        </div>

        {/* Right Column: Hero Visual Studio Mockup */}
        <div className="md:col-span-6 relative h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <img
            alt="Customized cases mockup"
            className="w-full h-full object-contain drop-shadow-2xl animate-[bounce_6s_ease-in-out_infinite] transition-transform duration-500 hover:scale-105"
            referrerPolicy="no-referrer"
            src={imgSrc}
            onError={() => {
              if (imgSrc !== HOTLINKED_ASSETS.heroMockupLocal) {
                setImgSrc(HOTLINKED_ASSETS.heroMockupLocal);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};
