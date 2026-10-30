import React, { useState, useMemo } from 'react';
import {
  DEVICE_MODELS,
  MATERIAL_OPTIONS,
  PATTERNS_CATALOG,
  CustomCaseConfig,
  DeviceCategory,
  DeviceModel,
  MaterialOption,
  PatternDesign,
} from '../types';
import {
  Smartphone,
  Tablet,
  Check,
  Type,
  Palette,
  Layers,
  Sparkles,
  ShoppingBag,
  RotateCw,
  Eye,
  ShieldCheck,
} from 'lucide-react';

interface CaseBuilderSectionProps {
  initialCategory?: DeviceCategory;
  onAddToCart: (config: CustomCaseConfig, finalPrice: number) => void;
}

export const CaseBuilderSection: React.FC<CaseBuilderSectionProps> = ({
  initialCategory = 'mobile',
  onAddToCart,
}) => {
  const [category, setCategory] = useState<DeviceCategory>(initialCategory);
  
  // Filter devices by category
  const availableDevices = useMemo(
    () => DEVICE_MODELS.filter((d) => d.category === category),
    [category]
  );

  const [selectedDevice, setSelectedDevice] = useState<DeviceModel>(availableDevices[0]);
  
  // Available materials
  const availableMaterials = useMemo(
    () => MATERIAL_OPTIONS.filter((m) => m.category === category || m.category === 'both'),
    [category]
  );
  
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(availableMaterials[0]);
  const [selectedPattern, setSelectedPattern] = useState<PatternDesign>(PATTERNS_CATALOG[0]);
  const [customText, setCustomText] = useState('VLC');
  const [monogramFont, setMonogramFont] = useState<'serif' | 'sans' | 'script'>('serif');
  const [foilColor, setFoilColor] = useState<'gold' | 'silver' | 'electric_blue' | 'white' | 'black'>('gold');
  const [finish, setFinish] = useState<'matte' | 'glossy' | 'tough'>('matte');
  const [activeTab, setActiveTab] = useState<'device' | 'material' | 'design' | 'monogram'>('design');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Sync device when category changes
  const handleCategoryChange = (cat: DeviceCategory) => {
    setCategory(cat);
    const devices = DEVICE_MODELS.filter((d) => d.category === cat);
    if (devices.length > 0) setSelectedDevice(devices[0]);
    const mats = MATERIAL_OPTIONS.filter((m) => m.category === cat || m.category === 'both');
    if (mats.length > 0) setSelectedMaterial(mats[0]);
  };

  // Price Calculation
  const basePrice = category === 'mobile' ? 24.9 : 34.9;
  const finishPrice = finish === 'tough' ? 3.0 : 0;
  const monogramPrice = customText.trim().length > 0 ? 3.0 : 0;
  const totalPrice = Number((basePrice + selectedMaterial.priceDelta + finishPrice + monogramPrice).toFixed(2));

  const handleAdd = () => {
    const config: CustomCaseConfig = {
      device: selectedDevice,
      material: selectedMaterial,
      pattern: selectedPattern,
      customText: customText.trim(),
      monogramFont,
      foilColor,
      finish,
      quantity: 1,
    };
    onAddToCart(config, totalPrice);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  // Foil styling for engraved monogram
  const getFoilStyle = () => {
    switch (foilColor) {
      case 'gold':
        return {
          background: 'linear-gradient(135deg, #f6d365 0%, #fda085 50%, #f6d365 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))',
        };
      case 'silver':
        return {
          background: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 50%, #b0b0b0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))',
        };
      case 'electric_blue':
        return {
          background: 'linear-gradient(135deg, #0040e0 0%, #2e5bff 50%, #b8c3ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
        };
      case 'white':
        return {
          color: '#ffffff',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
        };
      case 'black':
      default:
        return {
          color: '#1a1c1e',
          filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.4))',
        };
    }
  };

  const getFontFamily = () => {
    switch (monogramFont) {
      case 'serif':
        return 'Georgia, "Playfair Display", serif';
      case 'script':
        return '"Brush Script MT", "Caveat", cursive';
      case 'sans':
      default:
        return '"Montserrat", sans-serif';
    }
  };

  return (
    <section id="case-builder" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
              <Sparkles className="w-3.5 h-3.5 text-secondary-container" />
              <span>Studio 3D en Vivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1a1c1e]">
              El Atelier Digital de Valencia
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mt-2 max-w-xl">
              Configura tu modelo, experimenta con patrones mediterráneos y añade tu monograma artesanal grabado en caliente.
            </p>
          </div>

          {/* Device Category Selector */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-[#e2e2e5] shadow-xs shrink-0 self-start md:self-auto">
            <button
              onClick={() => handleCategoryChange('mobile')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                category === 'mobile'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-[#434656] hover:text-[#1a1c1e]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Fundas Móvil</span>
            </button>
            <button
              onClick={() => handleCategoryChange('tablet')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                category === 'tablet'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-[#434656] hover:text-[#1a1c1e]'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>Fundas Tablet</span>
            </button>
          </div>
        </div>

        {/* 12-Column Asymmetric Split (7 cols preview + 5 cols controls) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Live 3D / 2.5D Product Preview Card with infinite studio padding */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#e2e2e5] shadow-emdash-lg flex flex-col items-center justify-center relative min-h-[520px] overflow-hidden">
            {/* Studio Ambient Rim Lights */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,64,224,0.06)_0%,transparent_65%)] pointer-events-none" />
            
            {/* Top Toolbar over preview */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-xs text-on-surface-variant z-10">
              <span className="font-semibold text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Vista interactiva en tiempo real</span>
              </span>
              <button
                onClick={() => setRotationAngle((prev) => (prev === 0 ? 12 : prev === 12 ? -12 : 0))}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f3f3f6] hover:bg-[#e2e2e5] text-[#1a1c1e] font-medium transition-colors cursor-pointer"
                title="Girar perspectiva"
              >
                <RotateCw className="w-3.5 h-3.5 text-primary" />
                <span>Rotar {rotationAngle !== 0 ? `${rotationAngle}°` : '3D'}</span>
              </button>
            </div>

            {/* The Physical Case Mockup Container */}
            <div
              className="relative transition-transform duration-500 ease-out py-8 flex items-center justify-center"
              style={{
                transform: `rotateY(${rotationAngle}deg) ${
                  rotationAngle !== 0 ? 'scale(0.98)' : 'scale(1)'
                }`,
                perspective: '1000px',
              }}
            >
              {/* Phone / Tablet Case Body */}
              <div
                className={`relative shadow-2xl transition-all duration-300 overflow-hidden ${
                  category === 'mobile'
                    ? 'w-[250px] sm:w-[280px] h-[500px] sm:h-[550px] rounded-[44px] border-[6px]'
                    : 'w-[320px] sm:w-[380px] h-[440px] sm:h-[500px] rounded-[32px] border-[8px]'
                } ${
                  finish === 'tough'
                    ? 'border-slate-800 ring-4 ring-slate-900/30'
                    : 'border-[#1e293b]/70'
                }`}
                style={{
                  background: selectedPattern.previewGradient,
                  boxShadow:
                    finish === 'glossy'
                      ? '0 25px 50px -12px rgba(0, 64, 224, 0.25), inset 0 2px 8px rgba(255,255,255,0.4)'
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.22), inset 0 2px 4px rgba(0,0,0,0.15)',
                }}
              >
                {/* Specular sheen overlay for glossy finish */}
                {finish === 'glossy' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none transform -skew-x-12 translate-x-4" />
                )}

                {/* Matte diffuse texture */}
                {finish === 'matte' && (
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px] pointer-events-none" />
                )}

                {/* Camera Module Cutout */}
                {category === 'mobile' && selectedDevice.cameraType === 'pro_triple' && (
                  <div className="absolute top-5 left-5 w-24 h-24 rounded-[26px] bg-black/85 backdrop-blur-md p-2.5 shadow-md flex flex-col justify-between border border-white/10">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 shadow-inner flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-900/90 border border-cyan-400/40" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 shadow-inner flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-900/90 border border-cyan-400/40" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 shadow-inner flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-900/90 border border-cyan-400/40" />
                      </div>
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-100/90 shadow-sm" />
                    </div>
                  </div>
                )}

                {category === 'mobile' && selectedDevice.cameraType === 'pill' && (
                  <div className="absolute top-6 left-3 right-3 h-14 rounded-full bg-black/90 p-2 shadow-md flex items-center justify-around border border-white/10">
                    <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-900" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-900" />
                    </div>
                  </div>
                )}

                {category === 'tablet' && (
                  <div className="absolute top-5 right-5 w-16 h-16 rounded-2xl bg-black/80 backdrop-blur-md p-2 shadow-md flex flex-col items-center justify-center border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-950" />
                    </div>
                  </div>
                )}

                {/* Subtle Mediterranean pattern overlay lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Live Custom Engraved Monogram / Text */}
                {customText.trim() && (
                  <div className="absolute bottom-12 inset-x-0 flex flex-col items-center justify-center px-4 text-center select-none pointer-events-none">
                    <span
                      style={{
                        ...getFoilStyle(),
                        fontFamily: getFontFamily(),
                        letterSpacing: monogramFont === 'serif' ? '0.2em' : '0.05em',
                      }}
                      className="text-2xl sm:text-3xl font-extrabold uppercase transition-all duration-300 max-w-[200px] truncate"
                    >
                      {customText}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase opacity-75 font-semibold text-white mt-0.5">
                      Valencia Atelier
                    </span>
                  </div>
                )}

                {/* Physical edge bumper accents for Tough finish */}
                {finish === 'tough' && (
                  <>
                    <div className="absolute top-0 left-0 w-8 h-8 rounded-br-2xl bg-slate-900/80" />
                    <div className="absolute top-0 right-0 w-8 h-8 rounded-bl-2xl bg-slate-900/80" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 rounded-tr-2xl bg-slate-900/80" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 rounded-tl-2xl bg-slate-900/80" />
                  </>
                )}
              </div>
            </div>

            {/* Bottom Specs Badge below preview */}
            <div className="mt-4 pt-4 border-t border-[#e2e2e5] w-full flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
              <div>
                <span className="font-bold text-[#1a1c1e]">{selectedDevice.name}</span>
                <span className="mx-1.5">·</span>
                <span>{selectedMaterial.name}</span>
                <span className="mx-1.5">·</span>
                <span className="capitalize">{finish}</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantía de ajuste 100%</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Customization Controls Panel */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e2e5] shadow-emdash space-y-6">
            {/* Tab Navigation for Step-by-Step Customization */}
            <div className="flex border-b border-[#e2e2e5] pb-2 gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('design')}
                className={`pb-2 px-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'design'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-[#747688] hover:text-[#1a1c1e]'
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>Diseño</span>
              </button>
              <button
                onClick={() => setActiveTab('monogram')}
                className={`pb-2 px-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'monogram'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-[#747688] hover:text-[#1a1c1e]'
                }`}
              >
                <Type className="w-4 h-4" />
                <span>Monograma</span>
              </button>
              <button
                onClick={() => setActiveTab('material')}
                className={`pb-2 px-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'material'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-[#747688] hover:text-[#1a1c1e]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Material</span>
              </button>
              <button
                onClick={() => setActiveTab('device')}
                className={`pb-2 px-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'device'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-[#747688] hover:text-[#1a1c1e]'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Modelo</span>
              </button>
            </div>

            {/* TAB CONTENT: DESIGN / PATTERN */}
            {activeTab === 'design' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1a1c1e] mb-2 uppercase tracking-wide">
                    Patrón Mediterráneo
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {PATTERNS_CATALOG.map((pattern) => {
                      const isSelected = selectedPattern.id === pattern.id;
                      return (
                        <button
                          key={pattern.id}
                          onClick={() => setSelectedPattern(pattern)}
                          className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-24 cursor-pointer ${
                            isSelected
                              ? 'border-primary ring-2 ring-primary/20 bg-primary-fixed/15'
                              : 'border-[#e2e2e5] hover:border-primary/50'
                          }`}
                        >
                          <div
                            className="w-full h-8 rounded-lg mb-2 shadow-xs"
                            style={{ background: pattern.previewGradient }}
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#1a1c1e] truncate">
                              {pattern.name}
                            </span>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Finish Toggle Chips (as specified in markdown: Matte, Glossy, Tough) */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#1a1c1e] mb-2 uppercase tracking-wide">
                    Acabado de Superficie
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'matte', label: 'Matte Tacto', extra: '+0 €' },
                      { id: 'glossy', label: 'Brillo UV', extra: '+0 €' },
                      { id: 'tough', label: 'Tough Armor', extra: '+3 €' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setFinish(item.id as any)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                          finish === item.id
                            ? 'border-2 border-primary bg-primary text-white shadow-xs'
                            : 'border-[#e2e2e5] text-[#434656] hover:bg-[#f3f3f6]'
                        }`}
                      >
                        <div>{item.label}</div>
                        <div className={`text-[10px] ${finish === item.id ? 'text-white/80' : 'text-[#747688]'}`}>
                          {item.extra}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: MONOGRAM & TEXT */}
            {activeTab === 'monogram' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-[#1a1c1e] uppercase tracking-wide">
                      Texto o Iniciales Grabadas (+3 €)
                    </label>
                    <span className="text-[11px] text-[#747688]">Máx. 12 caracteres</span>
                  </div>
                  <input
                    type="text"
                    maxLength={12}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value.toUpperCase())}
                    placeholder="Ej. VLC o tus iniciales"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c4c5d9] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-base font-semibold tracking-wider transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1a1c1e] mb-2 uppercase tracking-wide">
                    Tipografía de Grabado
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'serif', label: 'Serif Clásica', preview: 'ABC' },
                      { id: 'sans', label: 'Moderna Sans', preview: 'ABC' },
                      { id: 'script', label: 'Caligráfica', preview: 'Abc' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setMonogramFont(f.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          monogramFont === f.id
                            ? 'border-2 border-primary bg-primary-fixed/20 text-primary font-bold'
                            : 'border-[#e2e2e5] hover:bg-[#f3f3f6] text-[#434656]'
                        }`}
                      >
                        <div className="text-sm font-semibold">{f.preview}</div>
                        <div className="text-[10px] text-[#747688] mt-0.5">{f.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1a1c1e] mb-2 uppercase tracking-wide">
                    Tono de Foil Metalizado
                  </label>
                  <div className="flex items-center gap-3">
                    {[
                      { id: 'gold', name: 'Oro', color: '#f59e0b' },
                      { id: 'silver', name: 'Plata', color: '#cbd5e1' },
                      { id: 'electric_blue', name: 'Azul', color: '#0040e0' },
                      { id: 'white', name: 'Blanco', color: '#ffffff' },
                      { id: 'black', name: 'Negro', color: '#18181b' },
                    ].map((foil) => (
                      <button
                        key={foil.id}
                        onClick={() => setFoilColor(foil.id as any)}
                        title={foil.name}
                        className={`w-9 h-9 rounded-full transition-transform cursor-pointer flex items-center justify-center border ${
                          foilColor === foil.id
                            ? 'scale-110 ring-2 ring-primary ring-offset-2'
                            : 'hover:scale-105 border-slate-300'
                        }`}
                        style={{ backgroundColor: foil.color }}
                      >
                        {foilColor === foil.id && (
                          <Check
                            className={`w-4 h-4 ${
                              foil.id === 'white' || foil.id === 'silver'
                                ? 'text-slate-900'
                                : 'text-white'
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: MATERIAL */}
            {activeTab === 'material' && (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wide">
                  Material y Estructura
                </label>
                {availableMaterials.map((mat) => {
                  const isSelected = selectedMaterial.id === mat.id;
                  return (
                    <div
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-2 border-primary bg-primary-fixed/20 ring-1 ring-primary'
                          : 'border-[#e2e2e5] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-[#1a1c1e]">{mat.name}</span>
                        <span className="text-xs font-semibold text-primary">
                          {mat.priceDelta > 0 ? `+${mat.priceDelta} €` : 'Incluido'}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-1">{mat.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB CONTENT: DEVICE MODEL */}
            {activeTab === 'device' && (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wide">
                  Selecciona tu Dispositivo
                </label>
                <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
                  {availableDevices.map((dev) => {
                    const isSelected = selectedDevice.id === dev.id;
                    return (
                      <button
                        key={dev.id}
                        onClick={() => setSelectedDevice(dev)}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'border-primary bg-primary/5 text-primary font-bold'
                            : 'border-[#e2e2e5] hover:bg-[#f3f3f6] text-[#1a1c1e]'
                        }`}
                      >
                        <div className="text-sm">{dev.name}</div>
                        <div className="text-xs text-[#747688] font-normal">{dev.brand}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Price Summary & Add to Cart Action */}
            <div className="pt-4 border-t border-[#e2e2e5] space-y-3">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs text-on-surface-variant block">Precio total configurado:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1e] font-display">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#434656]">
                  <span className="text-emerald-600 font-semibold">Envío gratis &lt;48h Valencia</span>
                  <div className="text-[#747688]">IVA incluido</div>
                </div>
              </div>

              {/* Add to Cart Button (in Soft Coral #fd7d6c as specified in the markdown spec) */}
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  addedAnimation
                    ? 'bg-emerald-600 scale-98'
                    : 'bg-secondary-container hover:opacity-95 active:scale-95'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>¡Añadido al Carrito!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Añadir al Carrito</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
