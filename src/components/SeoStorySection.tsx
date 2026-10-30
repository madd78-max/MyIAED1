import React from 'react';
import { ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export const SeoStorySection: React.FC = () => {
  return (
    <section id="taller-seo" className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-surface-container-low transition-all duration-700">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e2e2e5] text-xs font-semibold text-primary mb-4 shadow-2xs">
          <MapPin className="w-3.5 h-3.5 text-secondary-container" />
          <span>Taller & Showroom en Ruzafa, Valencia</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
          Especialistas en Personalización de Fundas en Valencia
        </h2>

        <div className="space-y-6 text-on-surface-variant text-base sm:text-lg leading-relaxed">
          <p>
            En <strong className="text-[#1a1c1e] font-semibold">Valencia Case Lab</strong>, somos expertos en la creación de{' '}
            <strong className="text-[#1a1c1e] font-semibold">fundas personalizadas en Valencia</strong>. Nuestro taller local combina tecnología de vanguardia con procesos artesanales para ofrecerte{' '}
            <strong className="text-[#1a1c1e] font-semibold">carcasas para móvil a medida</strong> que no solo protegen tu dispositivo, sino que reflejan tu personalidad única. Utilizamos técnicas de{' '}
            <strong className="text-[#1a1c1e] font-semibold">impresión de alta calidad en Valencia</strong> que garantizan colores vibrantes y una durabilidad excepcional en cada pieza.
          </p>

          <p>
            No nos limitamos solo a smartphones; nuestro servicio de{' '}
            <strong className="text-[#1a1c1e] font-semibold">diseño de fundas para tablets</strong> ofrece soluciones ergonómicas y elegantes para tus herramientas de trabajo. Cada producto está fabricado con materiales de grado industrial, asegurando una{' '}
            <strong className="text-[#1a1c1e] font-semibold">protección con estilo</strong> que resiste el ritmo del día a día. Al ser una empresa local, nos enorgullecemos de ofrecer una entrega express en toda la ciudad, reforzando nuestro compromiso con la comunidad valenciana.
          </p>

          <p>
            Si buscas calidad, cercanía y un diseño exclusivo, confía en los especialistas locales. Trabajamos con siliconas premium, polímeros de alta resistencia y piel vegana para que tu tecnología luzca impecable mientras está totalmente resguardada.
          </p>
        </div>

        {/* Feature Badges below SEO story */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#e2e2e5]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span className="text-xs font-semibold text-[#1a1c1e]">Garantía Anti-Decoloración UV de 2 Años</span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-secondary-container shrink-0" />
            <span className="text-xs font-semibold text-[#1a1c1e]">Grabado Láser de Precisión Milimétrica</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span className="text-xs font-semibold text-[#1a1c1e]">Recogida o Entrega en Menos de 48h</span>
          </div>
        </div>
      </div>
    </section>
  );
};
