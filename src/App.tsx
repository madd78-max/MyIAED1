import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { CaseBuilderSection } from './components/CaseBuilderSection';
import { SeoStorySection } from './components/SeoStorySection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CatalogModal } from './components/CatalogModal';
import { ThemeStudioDrawer } from './components/ThemeStudioDrawer';
import {
  THEME_PRESETS,
  DEFAULT_SECTIONS,
  ThemeTokens,
  ThemePreset,
  EmdashSectionConfig,
} from './theme/themeConfig';
import {
  CartItem,
  CustomCaseConfig,
  DeviceCategory,
  PatternDesign,
} from './types';
import { SlidersHorizontal, Monitor, Tablet, Smartphone } from 'lucide-react';

export default function App() {
  // Theme Tokens & Config
  const [tokens, setTokens] = useState<ThemeTokens>(THEME_PRESETS[0].tokens);
  const [activePresetId, setActivePresetId] = useState<string>(THEME_PRESETS[0].id);
  const [sections, setSections] = useState<EmdashSectionConfig[]>(DEFAULT_SECTIONS);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // UI Modals & Drawers
  const [isThemeStudioOpen, setIsThemeStudioOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Customizer State
  const [customizerCategory, setCustomizerCategory] = useState<DeviceCategory>('mobile');

  // Apply theme tokens to CSS root variables dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--emdash-primary', tokens.primary);
    root.style.setProperty('--emdash-secondary', tokens.secondary);
    root.style.setProperty('--emdash-bg', tokens.background);
    root.style.setProperty('--emdash-surface', tokens.surface);
    root.style.setProperty('--emdash-radius', tokens.borderRadius);
  }, [tokens]);

  const handleSelectPreset = (preset: ThemePreset) => {
    setActivePresetId(preset.id);
    setTokens(preset.tokens);
  };

  const handleUpdateTokens = (updated: Partial<ThemeTokens>) => {
    setTokens((prev) => ({ ...prev, ...updated }));
  };

  const handleToggleSection = (sectionId: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const handleResetTheme = () => {
    setActivePresetId(THEME_PRESETS[0].id);
    setTokens(THEME_PRESETS[0].tokens);
    setSections(DEFAULT_SECTIONS);
  };

  // Cart Actions
  const handleAddToCart = (config: CustomCaseConfig, unitPrice: number) => {
    const newItem: CartItem = {
      id: `${config.device.id}-${config.material.id}-${config.pattern.id}-${config.customText}-${Date.now()}`,
      config,
      unitPrice,
      totalPrice: unitPrice * config.quantity,
      addedAt: Date.now(),
    };
    setCartItems((prev) => [newItem, ...prev]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.config.quantity + delta;
            return newQty > 0
              ? {
                  ...item,
                  config: { ...item.config, quantity: newQty },
                  totalPrice: item.unitPrice * newQty,
                }
              : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToCustomizer = (cat?: DeviceCategory) => {
    if (cat) setCustomizerCategory(cat);
    const el = document.getElementById('case-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPatternToCustomize = (pattern: PatternDesign) => {
    scrollToCustomizer();
  };

  // Section check helper
  const isSectionEnabled = (id: string) => {
    const s = sections.find((sec) => sec.id === id);
    return s ? s.enabled : true;
  };

  // Total cart item count
  const cartTotalCount = cartItems.reduce((acc, i) => acc + i.config.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-[#1a1c1e] transition-colors duration-300">
      {/* Top Floating Emdash Studio Bar */}
      <aside aria-label="Emdash Theme Tools" className="bg-[#1a1c1e] text-white px-4 py-2 text-xs flex items-center justify-between z-30 sticky top-0 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-wide uppercase text-primary-fixed flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary-container" />
            Emdash Theme Engine
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline text-white/80">
            Tema: <strong>{THEME_PRESETS.find((p) => p.id === activePresetId)?.name}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Viewport simulation mode */}
          <div className="hidden md:flex items-center bg-white/10 rounded-lg p-0.5">
            <button
              onClick={() => setViewportMode('desktop')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewportMode === 'desktop' ? 'bg-primary text-white' : 'text-white/60 hover:text-white'
              }`}
              title="Vista de escritorio (1440px)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewportMode('tablet')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewportMode === 'tablet' ? 'bg-primary text-white' : 'text-white/60 hover:text-white'
              }`}
              title="Vista tablet (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewportMode('mobile')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewportMode === 'mobile' ? 'bg-primary text-white' : 'text-white/60 hover:text-white'
              }`}
              title="Vista móvil (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setIsThemeStudioOpen(true)}
            className="flex items-center gap-1.5 bg-primary hover:opacity-95 text-white px-3 py-1 rounded-md font-semibold text-[11px] transition-all cursor-pointer shadow-xs"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Personalizar Tema</span>
          </button>
        </div>
      </aside>

      {/* Frame Container for responsive testing */}
      <div
        className={`flex-1 mx-auto transition-all duration-300 w-full ${
          viewportMode === 'mobile'
            ? 'max-w-[420px] my-6 shadow-2xl rounded-3xl border-8 border-slate-900 overflow-hidden'
            : viewportMode === 'tablet'
            ? 'max-w-[820px] my-6 shadow-2xl rounded-3xl border-8 border-slate-900 overflow-hidden'
            : 'max-w-none'
        }`}
      >
        {/* Main Store Navigation Bar */}
        <Header
          cartCount={cartTotalCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenThemeStudio={() => setIsThemeStudioOpen(true)}
          onOpenCustomizer={(cat) => scrollToCustomizer(cat)}
          onOpenCatalog={() => setIsCatalogOpen(true)}
        />

        <main className="flex-1">
          {/* Hero Section */}
          {isSectionEnabled('hero') && (
            <HeroSection
              onStartCreating={() => scrollToCustomizer()}
              onViewDesigns={() => setIsCatalogOpen(true)}
            />
          )}

          {/* Services Section */}
          {isSectionEnabled('services') && (
            <ServicesSection
              onSelectCategory={(cat) => scrollToCustomizer(cat)}
            />
          )}

          {/* Craftsmanship Section */}
          {isSectionEnabled('craftsmanship') && <CraftsmanshipSection />}

          {/* Interactive Case Builder Section */}
          {isSectionEnabled('builder') && (
            <CaseBuilderSection
              initialCategory={customizerCategory}
              onAddToCart={handleAddToCart}
            />
          )}

          {/* SEO & Workshop Story Section */}
          {isSectionEnabled('seo_story') && <SeoStorySection />}

          {/* Conversion Banner Section */}
          {isSectionEnabled('cta_banner') && (
            <CtaSection onStartDesigning={() => scrollToCustomizer()} />
          )}
        </main>

        {/* Global Store Footer */}
        <Footer />
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectPatternToCustomize={handleSelectPatternToCustomize}
      />

      {/* Emdash Theme Studio Drawer */}
      <ThemeStudioDrawer
        isOpen={isThemeStudioOpen}
        onClose={() => setIsThemeStudioOpen(false)}
        currentTokens={tokens}
        activePresetId={activePresetId}
        onSelectPreset={handleSelectPreset}
        onUpdateTokens={handleUpdateTokens}
        sections={sections}
        onToggleSection={handleToggleSection}
        onResetTheme={handleResetTheme}
      />
    </div>
  );
}
