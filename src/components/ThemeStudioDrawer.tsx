import React, { useState } from 'react';
import {
  ThemePreset,
  ThemeTokens,
  EmdashSectionConfig,
  THEME_PRESETS,
} from '../theme/themeConfig';
import {
  X,
  Sliders,
  Check,
  Copy,
  Layers,
  Palette,
  Code,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface ThemeStudioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTokens: ThemeTokens;
  activePresetId: string;
  onSelectPreset: (preset: ThemePreset) => void;
  onUpdateTokens: (tokens: Partial<ThemeTokens>) => void;
  sections: EmdashSectionConfig[];
  onToggleSection: (sectionId: string) => void;
  onResetTheme: () => void;
}

export const ThemeStudioDrawer: React.FC<ThemeStudioDrawerProps> = ({
  isOpen,
  onClose,
  currentTokens,
  activePresetId,
  onSelectPreset,
  onUpdateTokens,
  sections,
  onToggleSection,
  onResetTheme,
}) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'tokens' | 'sections' | 'json'>('presets');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatedManifest = {
    $schema: 'https://emdash.engine/v2/theme-schema.json',
    theme: {
      name: 'Vibrant Customization System',
      id: 'valencia-case-lab',
      version: '1.0.0',
      framework: 'Emdash Engine v2.4',
      target: 'valenciacaselab.es',
      activePreset: activePresetId,
      tokens: currentTokens,
      sections: sections.map((s) => ({ id: s.id, name: s.name, enabled: s.enabled })),
    },
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedManifest, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#e2e2e5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-[#1a1c1e]">
                Emdash Theme Inspector
              </h3>
              <p className="text-[11px] text-[#747688]">Personalización y tokens en vivo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar panel de tema"
            className="p-1.5 rounded-lg text-[#747688] hover:bg-[#f3f3f6] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#e2e2e5] px-5 pt-3 gap-2 bg-[#f9f9fc]">
          <button
            onClick={() => setActiveTab('presets')}
            className={`pb-2.5 px-2 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'presets'
                ? 'border-b-2 border-primary text-primary'
                : 'text-[#747688] hover:text-[#1a1c1e]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Presets</span>
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`pb-2.5 px-2 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'tokens'
                ? 'border-b-2 border-primary text-primary'
                : 'text-[#747688] hover:text-[#1a1c1e]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Colores</span>
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`pb-2.5 px-2 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'sections'
                ? 'border-b-2 border-primary text-primary'
                : 'text-[#747688] hover:text-[#1a1c1e]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Secciones</span>
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`pb-2.5 px-2 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'json'
                ? 'border-b-2 border-primary text-primary'
                : 'text-[#747688] hover:text-[#1a1c1e]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>theme.json</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* TAB 1: PRESETS */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              <p className="text-xs text-on-surface-variant">
                Selecciona una de las paletas predefinidas aprobadas por el manual de marca:
              </p>
              {THEME_PRESETS.map((preset) => {
                const isSelected = activePresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => onSelectPreset(preset)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-2 ${
                      isSelected
                        ? 'border-primary ring-2 ring-primary/20 bg-primary-fixed/20'
                        : 'border-[#e2e2e5] hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[#1a1c1e]">{preset.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-primary" />}
                    </div>
                    <p className="text-[11px] text-on-surface-variant leading-tight">
                      {preset.description}
                    </p>
                    {/* Swatches preview */}
                    <div className="flex items-center gap-2 pt-1">
                      <span
                        className="w-5 h-5 rounded-md border border-black/10"
                        style={{ backgroundColor: preset.tokens.primary }}
                        title="Primary"
                      />
                      <span
                        className="w-5 h-5 rounded-md border border-black/10"
                        style={{ backgroundColor: preset.tokens.secondary }}
                        title="Secondary"
                      />
                      <span
                        className="w-5 h-5 rounded-md border border-black/10"
                        style={{ backgroundColor: preset.tokens.background }}
                        title="Background"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* TAB 2: TOKENS */}
          {activeTab === 'tokens' && (
            <div className="space-y-4">
              <p className="text-xs text-on-surface-variant">
                Ajusta los tokens cromáticos y el radio del tema en tiempo real:
              </p>

              <div>
                <label className="block text-xs font-bold text-[#1a1c1e] mb-1">
                  Color Primario (Acciones & Títulos)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={currentTokens.primary}
                    onChange={(e) => onUpdateTokens({ primary: e.target.value })}
                    className="w-10 h-10 rounded-lg border border-[#c4c5d9] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={currentTokens.primary}
                    onChange={(e) => onUpdateTokens({ primary: e.target.value })}
                    className="flex-1 text-xs px-3 py-2 border border-[#c4c5d9] rounded-lg font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a1c1e] mb-1">
                  Color Secundario (Coral / Add to Cart)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={currentTokens.secondary}
                    onChange={(e) => onUpdateTokens({ secondary: e.target.value })}
                    className="w-10 h-10 rounded-lg border border-[#c4c5d9] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={currentTokens.secondary}
                    onChange={(e) => onUpdateTokens({ secondary: e.target.value })}
                    className="flex-1 text-xs px-3 py-2 border border-[#c4c5d9] rounded-lg font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a1c1e] mb-1">
                  Color de Fondo (Canvas Neutral 60%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={currentTokens.background}
                    onChange={(e) => onUpdateTokens({ background: e.target.value })}
                    className="w-10 h-10 rounded-lg border border-[#c4c5d9] cursor-pointer"
                  />
                  <input
                    type="text"
                    value={currentTokens.background}
                    onChange={(e) => onUpdateTokens({ background: e.target.value })}
                    className="flex-1 text-xs px-3 py-2 border border-[#c4c5d9] rounded-lg font-mono uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a1c1e] mb-1">
                  Border Radius de Componentes
                </label>
                <select
                  value={currentTokens.borderRadius}
                  onChange={(e) => onUpdateTokens({ borderRadius: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-[#c4c5d9] rounded-lg"
                >
                  <option value="0.25rem">Compacto (0.25rem)</option>
                  <option value="0.5rem">Estándar (0.5rem / 8px)</option>
                  <option value="0.75rem">Medio (0.75rem / 12px)</option>
                  <option value="1rem">Suave (1rem / 16px)</option>
                </select>
              </div>
            </div>
          )}

          {/* TAB 3: SECTIONS */}
          {activeTab === 'sections' && (
            <div className="space-y-3">
              <p className="text-xs text-on-surface-variant">
                Controla la visibilidad de los bloques del tema de la tienda:
              </p>
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="p-3 rounded-xl border border-[#e2e2e5] flex items-center justify-between bg-white"
                >
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1c1e]">{section.name}</h5>
                    <p className="text-[11px] text-[#747688]">{section.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={section.enabled}
                    onChange={() => onToggleSection(section.id)}
                    className="w-4 h-4 text-primary rounded border-[#c4c5d9] focus:ring-primary cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: THEME JSON MANIFEST */}
          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1a1c1e]">emdash-theme.json</span>
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-1 text-xs text-primary font-semibold hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar JSON'}</span>
                </button>
              </div>
              <pre className="p-3 bg-[#1a1c1e] text-emerald-400 text-[11px] rounded-xl overflow-x-auto font-mono max-h-80 leading-relaxed">
                {JSON.stringify(generatedManifest, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#e2e2e5] bg-[#f9f9fc] flex items-center justify-between gap-3">
          <button
            onClick={onResetTheme}
            className="flex items-center gap-1.5 text-xs text-[#747688] hover:text-[#1a1c1e] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl shadow-xs hover:opacity-95 transition-opacity cursor-pointer"
          >
            Aplicar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
