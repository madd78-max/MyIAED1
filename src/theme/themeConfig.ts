export interface ThemeTokens {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  fontDisplay: string;
  fontBody: string;
  borderRadius: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  tokens: ThemeTokens;
}

export interface EmdashSectionConfig {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface EmdashThemeManifest {
  name: string;
  version: string;
  engine: string;
  author: string;
  description: string;
  activePreset: string;
  tokens: ThemeTokens;
  sections: EmdashSectionConfig[];
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'vibrant_valencia',
    name: 'Vibrant Valencia (Original)',
    description: 'Paleta inspirada en el Mediterráneo: azul eléctrico, coral cálido y lienzos nítidos.',
    tokens: {
      primary: '#0040e0',
      secondary: '#fd7d6c',
      background: '#f9f9fc',
      surface: '#ffffff',
      fontDisplay: 'Montserrat',
      fontBody: 'Inter',
      borderRadius: '0.5rem',
    },
  },
  {
    id: 'mediterranean_azure',
    name: 'Mediterráneo Profundo',
    description: 'Azul ultramar con acentos mandarina, evocando el mar Balear y la costa levantina.',
    tokens: {
      primary: '#0052cc',
      secondary: '#ff6b4a',
      background: '#f4f7fc',
      surface: '#ffffff',
      fontDisplay: 'Montserrat',
      fontBody: 'Inter',
      borderRadius: '0.75rem',
    },
  },
  {
    id: 'malvarrosa_sunset',
    name: 'Puesta de Sol Malvarrosa',
    description: 'Terracota artesanal y oro solar sobre base marfil para un estilo cerámico.',
    tokens: {
      primary: '#c83820',
      secondary: '#f59e0b',
      background: '#fff9f5',
      surface: '#ffffff',
      fontDisplay: 'Montserrat',
      fontBody: 'Inter',
      borderRadius: '0.5rem',
    },
  },
  {
    id: 'turia_botanical',
    name: 'Jardín del Turia',
    description: 'Verde esmeralda y coral suave que reflejan la flora mediterránea y el río Turia.',
    tokens: {
      primary: '#0f766e',
      secondary: '#f97316',
      background: '#f6fbf9',
      surface: '#ffffff',
      fontDisplay: 'Montserrat',
      fontBody: 'Inter',
      borderRadius: '0.5rem',
    },
  },
  {
    id: 'minimal_atelier',
    name: 'Atelier Negro & Cobalto',
    description: 'Contraste técnico contemporáneo con negro grafito y detalles cobalto de alta gama.',
    tokens: {
      primary: '#18181b',
      secondary: '#3b82f6',
      background: '#fafafa',
      surface: '#ffffff',
      fontDisplay: 'Montserrat',
      fontBody: 'Inter',
      borderRadius: '0.25rem',
    },
  },
];

export const DEFAULT_SECTIONS: EmdashSectionConfig[] = [
  { id: 'hero', name: 'Hero Showcase', description: 'Titular de bienvenida, mockup flotante y accesos directos', enabled: true },
  { id: 'services', name: 'Servicios de Personalización', description: 'Tarjetas de fundas para móvil y tablet con fotos de taller', enabled: true },
  { id: 'craftsmanship', name: 'Artesanía Local & Orgullo', description: 'Valores locales, Ciudad de las Artes y las Ciencias', enabled: true },
  { id: 'builder', name: 'Case Builder Interactivo', description: 'Simulador 3D en tiempo real con selección de modelo, arte y grabado', enabled: true },
  { id: 'seo_story', name: 'Historia & Taller en Valencia', description: 'Texto editorial SEO sobre materiales y confección local', enabled: true },
  { id: 'cta_banner', name: 'Banner de Conversión', description: 'Llamada a la acción final para iniciar diseño', enabled: true },
];
