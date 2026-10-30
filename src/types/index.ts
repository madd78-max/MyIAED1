export type DeviceCategory = 'mobile' | 'tablet';

export interface DeviceModel {
  id: string;
  name: string;
  brand: string;
  category: DeviceCategory;
  cameraType: 'pro_triple' | 'dual_diagonal' | 'single' | 'pill' | 'tablet_camera';
}

export interface MaterialOption {
  id: string;
  name: string;
  category: DeviceCategory | 'both';
  priceDelta: number;
  description: string;
  textureClass: string;
  finishType: string;
}

export interface PatternDesign {
  id: string;
  name: string;
  collection: string;
  previewGradient: string;
  bgPatternUrl?: string;
  accentColor: string;
  description: string;
}

export interface CustomCaseConfig {
  device: DeviceModel;
  material: MaterialOption;
  pattern: PatternDesign;
  customText: string;
  monogramFont: 'serif' | 'sans' | 'script';
  foilColor: 'gold' | 'silver' | 'electric_blue' | 'white' | 'black';
  finish: 'matte' | 'glossy' | 'tough';
  quantity: number;
}

export interface CartItem {
  id: string;
  config: CustomCaseConfig;
  unitPrice: number;
  totalPrice: number;
  addedAt: number;
}

export const HOTLINKED_ASSETS = {
  heroMockup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVD8gbgQxFsaJGfAXrsPFiVf29VmoUIUcS7gyLpP2eTdhjenNngMGSwi0Nh64Y0cPyqZYYu3owrJXewRCgIio_yGKLhS5e0RVhVaX3z7AZIVhrpoAo2_TEIFVyuuRbT2Jx2638VEVWhXBLEqWlhfldZPYJcxwXDm2ZUnBv2OjO5d5AbsYsPgQFRShgjPwnt-sid2MHZJXlMB1Rwsi5TiWg40_oPRAESyI0q0ooV7i48504RdXqZjocSCo32sgwsWok1ECh0KCTK-f0',
  heroMockupLocal: '/public/assets/aistudio/Image_1_01b5bd42.jpeg',
  mobileService: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmCp19KYoXSsf1kpfbVfxpvv6w4gfUvbNDC52QgWqJVXUnpigQBL46nbc60glMJlgPNH3wPycgS4jxajCfjh39eq8FwCxtrEOSRZuapwOdqSy1K8Flr-WRcI09VqI6-GAeJyHzr4iwQ-znXfdvNrBKxD2Wv0wOVJF2uMw9jQdsiaWaiHApd9ezTY6SifhaKBpCMV9iPUFHugzof4NxjKjV1DFwwnvJtvp9PuB5qEtDiQ5la2R_rAnRCleistVkW6YCJJ39IR1LI4ha',
  tabletService: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwBCCLXStVoFgCpfl2fkOXDTedoOFl2TTVxv9J70-OwhsaPsXI5gTr9l_Qd32mLD3xuIMNBGszyA5dIqlCKiYy7tYviy21Tjd5j48KE0adhgNSF_wv4UrrKjgsCPOM6bSGLyy0OiIg9yXjJDMYDjl6ZTjm1OXq6YJHfmgf_M401ETwqugdumhqUMO7hgiNWzNJRm5izLRrlmiDPgd4I6PNzFxkgzx2L2N5vV96nTou_0lfQx_93bY1JQHf_72v4L00t26uXK0ImDBz',
  valenciaCity: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKJE_Iv5ZrR4wkzXm90uNOK4WxuxzS1IwNfMeQwBqUwOogNKC-gX-Q-d22iCjtBXrPV93T9sSw6JQFtbCCljZQuI0sgRHw0aewR7fQZVv-9jBZiuSQoTKhN-v8ob1R3U7gaMVr4cDrukMahlwm1iliiZzkQsKAhyCxd7wISl61BmIQjYC89GGcYXT67MSYz9QZfjxhLvuomc0rUAcDLXdNfSkVoejRuwx8eJ8NIiO6IMhkABZMrrqVNdb8qIcUwNftu00vHe0iGSzL'
};

export const DEVICE_MODELS: DeviceModel[] = [
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro', brand: 'Apple', category: 'mobile', cameraType: 'pro_triple' },
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', brand: 'Apple', category: 'mobile', cameraType: 'pro_triple' },
  { id: 'iphone-16', name: 'iPhone 16', brand: 'Apple', category: 'mobile', cameraType: 'dual_diagonal' },
  { id: 'iphone-15-pro', name: 'iPhone 15 Pro', brand: 'Apple', category: 'mobile', cameraType: 'pro_triple' },
  { id: 'samsung-s24-ultra', name: 'Galaxy S24 Ultra', brand: 'Samsung', category: 'mobile', cameraType: 'pro_triple' },
  { id: 'pixel-9-pro', name: 'Pixel 9 Pro', brand: 'Google', category: 'mobile', cameraType: 'pill' },
  { id: 'ipad-pro-11', name: 'iPad Pro 11" M4', brand: 'Apple', category: 'tablet', cameraType: 'tablet_camera' },
  { id: 'ipad-air-13', name: 'iPad Air 13" M2', brand: 'Apple', category: 'tablet', cameraType: 'tablet_camera' },
  { id: 'galaxy-tab-s9', name: 'Galaxy Tab S9', brand: 'Samsung', category: 'tablet', cameraType: 'tablet_camera' },
];

export const MATERIAL_OPTIONS: MaterialOption[] = [
  {
    id: 'silicone-soft',
    name: 'Silicona Líquida Antigolpes',
    category: 'mobile',
    priceDelta: 0,
    description: 'Tacto sedoso ultra-suave con forro interior de microfibra y reborde de pantalla.',
    textureClass: 'from-blue-600/10 to-indigo-600/10',
    finishType: 'Matte Soft-Touch'
  },
  {
    id: 'polymer-hard',
    name: 'Polímero Duro Termoformado',
    category: 'both',
    priceDelta: 4,
    description: 'Impresión de bordes envolventes de 300 ppp de máxima fidelidad y resistencia a rayaduras.',
    textureClass: 'from-amber-500/10 to-rose-500/10',
    finishType: 'Gloss / High Gloss UV'
  },
  {
    id: 'vegan-leather',
    name: 'Piel Vegana Grano Fino',
    category: 'both',
    priceDelta: 8,
    description: 'Textura de lujo elaborada con polímeros reciclados, ideal para grabado láser o golpe en seco.',
    textureClass: 'from-stone-800/10 to-stone-900/10',
    finishType: 'Debossed Leather'
  },
  {
    id: 'smart-cover',
    name: 'Smart Cover Plegable 360º',
    category: 'tablet',
    priceDelta: 12,
    description: 'Tapa magnética con función atril de 3 posiciones y activación automática de pantalla.',
    textureClass: 'from-blue-900/10 to-slate-900/10',
    finishType: 'Magnetic Tri-Fold'
  }
];

export const PATTERNS_CATALOG: PatternDesign[] = [
  {
    id: 'mosaic-mediterranean',
    name: 'Mosaico Mediterráneo',
    collection: 'Colección Ciutat Vella',
    previewGradient: 'linear-gradient(135deg, #0040e0 0%, #2e5bff 45%, #fd7d6c 100%)',
    accentColor: '#fd7d6c',
    description: 'Geometría inspirada en las cúpulas vidriadas y azulejos históricos de Valencia.'
  },
  {
    id: 'malvarrosa-floral',
    name: 'Flores de Malvarrosa',
    collection: 'Colección Marina',
    previewGradient: 'linear-gradient(135deg, #fd7d6c 0%, #f59e0b 50%, #0040e0 100%)',
    accentColor: '#0040e0',
    description: 'Fantasía floral con ornatos botánicos mediterráneos y tonos arena cálida.'
  },
  {
    id: 'turia-minimal',
    name: 'Azul Turia Arquitectónico',
    collection: 'Colección Calatrava',
    previewGradient: 'linear-gradient(135deg, #001356 0%, #0040e0 60%, #b8c3ff 100%)',
    accentColor: '#ffffff',
    description: 'Líneas limpias y sombras de arquitectura moderna sobre azul noche.'
  },
  {
    id: 'silk-terracotta',
    name: 'Terracota & Lonja',
    collection: 'Colección Lonja de la Seda',
    previewGradient: 'linear-gradient(135deg, #a43b2f 0%, #e2725b 50%, #ffdad5 100%)',
    accentColor: '#ffffff',
    description: 'Elegancia clásica inspirada en los arcos de piedra caliza y arcilla valenciana.'
  },
  {
    id: 'albufera-sunset',
    name: 'Atardecer en L\'Albufera',
    collection: 'Colección Humedales',
    previewGradient: 'linear-gradient(135deg, #312e81 0%, #7c3aed 40%, #f43f5e 80%, #fbbf24 100%)',
    accentColor: '#fbbf24',
    description: 'Gradiente crepuscular que evoca el reflejo dorado sobre las aguas tranquilas de la Albufera.'
  },
  {
    id: 'monochrome-artisan',
    name: 'Cuero Crudo & Monograma',
    collection: 'Colección Taller Minimal',
    previewGradient: 'linear-gradient(135deg, #27272a 0%, #3f3f46 60%, #18181b 100%)',
    accentColor: '#fd7d6c',
    description: 'Superficie sobria pensada para resaltar el grabado personalizado con iniciales.'
  }
];
