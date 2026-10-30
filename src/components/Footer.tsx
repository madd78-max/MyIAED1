import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#e2e2e5] pt-16 pb-12 px-5 sm:px-8 lg:px-12 text-[#1a1c1e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#eeeef0]">
        {/* Brand & Mission */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-black shadow-sm">
              V
            </span>
            <span className="text-xl font-bold font-display text-primary">Valencia Case Lab</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Personalización de alta resistencia para móviles y tablets en el corazón de Valencia. Materiales certificados de grado industrial y tintas ecológicas.
          </p>
          <div className="pt-2 text-xs text-[#747688] flex items-center gap-1.5">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-secondary-container fill-secondary-container inline" />
            <span>en Ruzafa, Valencia</span>
          </div>
        </div>

        {/* Local Workshop Location */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1c1e]">El Taller en Ruzafa</h4>
          <div className="space-y-2.5 text-xs text-on-surface-variant">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Carrer de Russafa, 14, L'Eixample, 46006 València</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Lunes a Sábado: 10:00 - 20:30 h</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+34 963 81 24 50</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>hola@valenciacaselab.es</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1c1e]">Garantías</h4>
          <ul className="space-y-2 text-xs text-on-surface-variant">
            <li><a href="#artesania" className="hover:text-primary transition-colors">Entrega Express &lt;48h</a></li>
            <li><a href="#artesania" className="hover:text-primary transition-colors">Garantía UV 2 años</a></li>
            <li><a href="#taller-seo" className="hover:text-primary transition-colors">Materiales Sostenibles</a></li>
            <li><a href="#case-builder" className="hover:text-primary transition-colors">Ajuste Milimétrico</a></li>
          </ul>
        </div>

        {/* Emdash Engine & Theme Specs */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1c1e]">Emdash Theme</h4>
          <div className="bg-[#f3f3f6] p-4 rounded-xl text-xs space-y-1.5 border border-[#e2e2e5]">
            <div className="font-semibold text-primary">Vibrant Customization System</div>
            <div className="text-on-surface-variant">Arquitectura modular para tiendas de personalización de dispositivos.</div>
            <div className="text-[11px] text-[#747688] pt-1 border-t border-[#e2e2e5] flex justify-between">
              <span>Motor Emdash v2.4</span>
              <span>100% Responsive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#747688] gap-4">
        <div>
          © {new Date().getFullYear()} Valencia Case Lab S.L. Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          <a href="#" className="hover:text-primary transition-colors">Condiciones de Taller</a>
        </div>
      </div>
    </footer>
  );
};
