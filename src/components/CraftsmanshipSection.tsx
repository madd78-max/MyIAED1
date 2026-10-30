import React, { useState } from 'react';
import { HOTLINKED_ASSETS } from '../types';
import { Truck, Award, Leaf } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [valenciaImgError, setValenciaImgError] = useState(false);

  return (
    <section id="artesania" className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Local Pride Details */}
        <div className="md:col-span-5 order-2 md:order-1 space-y-8">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full -z-10 blur-2xl" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1c1e] leading-tight">
              Artesanía Local, <br />
              <span className="text-primary">Orgullo Valenciano</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1a1c1e]">Entrega Express en Valencia</h4>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Recibe tu funda personalizada en menos de 48 horas dentro de la ciudad, directamente desde nuestro taller en Ruzafa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1a1c1e]">Calidad Certificada</h4>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Utilizamos materiales de grado industrial procesados artesanalmente en nuestro taller local para resistencia militar.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1a1c1e]">Procesos Sostenibles</h4>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Tintas ecológicas UV libres de solventes y gestión responsable de residuos plásticos con polímeros reciclados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Panoramic Valencia Photography */}
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[440px] lg:h-[480px] group">
            {!valenciaImgError ? (
              <img
                alt="Ciudad de las Artes y las Ciencias en Valencia al atardecer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                src={HOTLINKED_ASSETS.valenciaCity}
                onError={() => setValenciaImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-blue-900 via-indigo-950 to-blue-700 flex items-center justify-center text-white p-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold font-display">Taller Central · Valencia</h3>
                  <p className="text-sm opacity-80 mt-2">Inspirado en la luz y arquitectura del Mediterráneo</p>
                </div>
              </div>
            )}
            
            {/* Scrim Overlay with Local Pride Quote */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent flex items-end p-6 sm:p-8">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-bold italic drop-shadow-md">
                “Diseñado y producido en el corazón de Valencia.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
