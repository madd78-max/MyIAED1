import React from 'react';
import { ShoppingBag, SlidersHorizontal, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenThemeStudio: () => void;
  onOpenCustomizer: (category?: 'mobile' | 'tablet') => void;
  onOpenCatalog: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenThemeStudio,
  onOpenCustomizer,
  onOpenCatalog,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e2e2e5] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-bold tracking-tight text-primary font-display whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-black shadow-sm group-hover:scale-105 transition-transform">
            V
          </span>
          <span>Valencia Case Lab</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#434656] whitespace-nowrap">
          <button 
            onClick={() => onOpenCustomizer('mobile')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Fundas Móvil
          </button>
          <button 
            onClick={() => onOpenCustomizer('tablet')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Fundas Tablet
          </button>
          <a 
            href="#artesania" 
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Artesanía Local
          </a>
          <button 
            onClick={onOpenCatalog}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Catálogo
          </button>
          <a 
            href="#taller-seo" 
            className="hover:text-primary transition-colors cursor-pointer"
          >
            El Taller
          </a>
        </nav>

        {/* Zone 3: 1 primary action + cart & theme studio affordances */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Emdash Theme Studio trigger */}
          <button
            onClick={onOpenThemeStudio}
            title="Abrir Emdash Theme Inspector"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#eeeef0] hover:bg-[#e2e2e5] text-[#1a1c1e] transition-colors whitespace-nowrap"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span>Emdash Theme</span>
          </button>

          {/* Cart button */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de compra"
            className="relative p-2.5 rounded-lg text-[#1a1c1e] hover:bg-[#f3f3f6] transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary-container text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => onOpenCustomizer('mobile')}
            className="bg-primary text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 active:scale-95 transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Diseñar Ahora</span>
          </button>
        </div>
      </div>
    </header>
  );
};
