import React, { useState } from 'react';
import { HOTLINKED_ASSETS } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectCategory: (category: 'mobile' | 'tablet') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectCategory }) => {
  const [mobileImgError, setMobileImgError] = useState(false);
  const [tabletImgError, setTabletImgError] = useState(false);

  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-surface transition-all duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Líneas de Producción
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1a1c1e] mt-2">
            Precisión y Acabados de Taller
          </h2>
          <p className="text-on-surface-variant text-base mt-3">
            Cada soporte tecnológico requiere una arquitectura de protección específica adaptada a tu día a día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mobile Case Service */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,64,224,0.12)] hover:-translate-y-1 group">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">smartphone</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1a1c1e] mb-3">
                Fundas para Móvil
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base mb-6 leading-relaxed">
                Protección y arte para cada modelo del mercado. Especialistas en acabados de alta resistencia.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Silicona, Polímero Duro y Piel Vegana</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Impresión UV de alta definición</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Grabado Láser Personalizado</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl h-48 sm:h-56 bg-slate-100 relative">
                {!mobileImgError ? (
                  <img
                    alt="Proceso de impresión UV en taller de Valencia"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    src={HOTLINKED_ASSETS.mobileService}
                    onError={() => setMobileImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-blue-700 to-indigo-900 flex items-center justify-center text-white p-4 text-center">
                    <span className="text-sm font-medium">Impresión UV de Alta Fidelidad · Taller Valencia</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-primary">
                  Desde 24,90 €
                </div>
              </div>

              <button
                onClick={() => onSelectCategory('mobile')}
                className="w-full bg-[#f3f3f6] hover:bg-primary hover:text-white text-primary font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm group-hover:bg-primary group-hover:text-white cursor-pointer"
              >
                <span>Configurar Funda de Móvil</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tablet Case Service */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(253,125,108,0.15)] hover:-translate-y-1 group">
            <div>
              <div className="w-16 h-16 bg-secondary-container/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-4xl">tablet_mac</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1a1c1e] mb-3">
                Fundas para Tablet
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base mb-6 leading-relaxed">
                Tu herramienta de trabajo, ahora con identidad propia. Diseños ergonómicos y funcionales.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Smart Covers y Fundas de Uso Rudo</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Técnicas de Grabado de Lujo</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1a1c1e]">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Protección 360º Personalizada</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl h-48 sm:h-56 bg-slate-100 relative">
                {!tabletImgError ? (
                  <img
                    alt="Funda de tablet en piel con monograma grabado"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    src={HOTLINKED_ASSETS.tabletService}
                    onError={() => setTabletImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-amber-700 to-rose-900 flex items-center justify-center text-white p-4 text-center">
                    <span className="text-sm font-medium">Smart Covers & Grabado de Lujo · Valencia</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-secondary">
                  Desde 34,90 €
                </div>
              </div>

              <button
                onClick={() => onSelectCategory('tablet')}
                className="w-full bg-[#f3f3f6] hover:bg-secondary-container hover:text-white text-secondary font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm group-hover:bg-secondary-container group-hover:text-white cursor-pointer"
              >
                <span>Configurar Funda de Tablet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
