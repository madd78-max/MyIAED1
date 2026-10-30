import React from 'react';
import { PATTERNS_CATALOG, PatternDesign } from '../types';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPatternToCustomize: (pattern: PatternDesign) => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectPatternToCustomize,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden border border-[#e2e2e5]">
        {/* Header */}
        <div className="p-6 border-b border-[#e2e2e5] flex items-center justify-between bg-white">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
              <Sparkles className="w-3.5 h-3.5 text-secondary-container" />
              <span>Colecciones Mediterráneas</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-[#1a1c1e]">
              Galería de Diseños Exclusivos
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#747688] hover:bg-[#f3f3f6] transition-colors cursor-pointer"
            aria-label="Cerrar catálogo"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Catalog Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATTERNS_CATALOG.map((pattern) => (
            <div
              key={pattern.id}
              className="rounded-2xl border border-[#e2e2e5] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              {/* Pattern Banner & Mockup Preview */}
              <div
                className="h-44 p-4 relative flex items-center justify-center"
                style={{ background: pattern.previewGradient }}
              >
                <div className="w-16 h-28 rounded-2xl border-2 border-white/60 shadow-xl flex items-center justify-center backdrop-blur-xs group-hover:scale-105 transition-transform">
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                    VLC
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-white font-medium">
                  {pattern.collection}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-display font-bold text-base text-[#1a1c1e]">
                    {pattern.name}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {pattern.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    onSelectPatternToCustomize(pattern);
                    onClose();
                  }}
                  className="w-full py-2.5 px-3 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer group-hover:bg-primary group-hover:text-white"
                >
                  <span>Personalizar este diseño</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#e2e2e5] bg-[#f9f9fc] flex items-center justify-between text-xs text-[#747688]">
          <span>Todos los patrones se imprimen mediante tecnología UV LED de 9 capas.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-primary hover:underline cursor-pointer"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    </div>
  );
};
