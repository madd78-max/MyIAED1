import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onStartDesigning: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartDesigning }) => {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-surface-container-low transition-all duration-700">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary tracking-tight">
          ¡Crea tu funda única hoy!
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Transforma tu dispositivo en una obra de arte. Elige tu modelo, sube tu diseño o déjate inspirar por nuestra colección exclusiva.
        </p>
        <div className="pt-2">
          <button
            onClick={onStartDesigning}
            className="bg-primary text-white px-8 sm:px-10 py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-secondary-container" />
            <span>Empezar a Diseñar</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
