import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, Check, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.config.quantity, 0);
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 0 ? 0 : 0; // Free express in Valencia
  const total = Math.max(0, subtotal - discount + shipping);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'VALENCIA10') {
      setDiscountApplied(true);
    }
  };

  const handleSimulateCheckout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCheckoutSuccess(true);
    }, 1000);
  };

  const handleCloseSuccess = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#e2e2e5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg text-[#1a1c1e]">
              Tu Carrito ({items.reduce((acc, i) => acc + i.config.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="p-1.5 rounded-lg text-[#747688] hover:bg-[#f3f3f6] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {checkoutSuccess ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#1a1c1e]">
                ¡Pedido Confirmado!
              </h4>
              <p className="text-sm text-on-surface-variant max-w-xs mx-auto">
                Tu funda artesanal ya ha entrado en la cola de producción en nuestro taller de Ruzafa. Te llegará en menos de 48 horas.
              </p>
              <div className="p-3 bg-[#f3f3f6] rounded-xl text-xs font-mono text-[#434656]">
                Nº de Pedido: VLC-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={handleCloseSuccess}
                className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-95 transition-opacity cursor-pointer"
              >
                Seguir Diseñando
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-display text-lg font-bold text-[#1a1c1e]">Tu carrito está vacío</h4>
              <p className="text-xs text-on-surface-variant max-w-xs mx-auto">
                Elige tu modelo y crea una funda con tu monograma o arte valenciano exclusivo.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-primary text-white rounded-lg text-xs font-semibold shadow-xs hover:opacity-95 transition-opacity cursor-pointer"
              >
                Explorar Modelos
              </button>
            </div>
          ) : (
            <>
              {/* Free Local Shipping Banner */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Envío Express Gratis</strong> garantizado para Valencia (&lt;48h).</span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-[#e2e2e5] bg-white flex gap-3 shadow-2xs"
                  >
                    {/* Small swatch preview */}
                    <div
                      className="w-14 h-20 rounded-lg shrink-0 shadow-inner flex items-center justify-center relative overflow-hidden"
                      style={{ background: item.config.pattern.previewGradient }}
                    >
                      {item.config.customText && (
                        <span className="text-[9px] font-black text-white/90 truncate px-1 uppercase">
                          {item.config.customText}
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-1">
                        <div>
                          <h5 className="text-xs font-bold text-[#1a1c1e]">
                            {item.config.device.name}
                          </h5>
                          <p className="text-[11px] text-[#747688]">
                            {item.config.material.name} · {item.config.pattern.name}
                          </p>
                          {item.config.customText && (
                            <span className="inline-block mt-0.5 text-[10px] bg-primary/10 text-primary font-semibold px-1.5 py-0.5 rounded">
                              Grabado: {item.config.customText}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label="Eliminar producto"
                          className="text-[#747688] hover:text-red-600 p-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#e2e2e5] rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-[#f3f3f6] text-[#747688] transition-colors cursor-pointer"
                            aria-label="Reducir cantidad"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#1a1c1e]">
                            {item.config.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-[#f3f3f6] text-[#747688] transition-colors cursor-pointer"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-bold text-[#1a1c1e]">
                          {(item.unitPrice * item.config.quantity).toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyCoupon} className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Código (prueba VALENCIA10)"
                    className="flex-1 text-xs px-3 py-2 border border-[#c4c5d9] rounded-lg focus:border-primary outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#f3f3f6] hover:bg-[#e2e2e5] text-xs font-semibold rounded-lg text-[#1a1c1e] transition-colors cursor-pointer"
                  >
                    Aplicar
                  </button>
                </div>
                {discountApplied && (
                  <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">
                    ✓ Descuento del 10% aplicado correctamente
                  </span>
                )}
              </form>
            </>
          )}
        </div>

        {/* Drawer Footer with Checkout */}
        {!checkoutSuccess && items.length > 0 && (
          <div className="p-5 border-t border-[#e2e2e5] bg-white space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#747688]">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Descuento Valencia (10%)</span>
                  <span>-{discount.toFixed(2)} €</span>
                </div>
              )}
              <div className="flex justify-between text-[#747688]">
                <span>Entrega Express Valencia (&lt;48h)</span>
                <span className="text-emerald-600 font-semibold">GRATIS</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1a1c1e] pt-2 border-t border-[#eeeef0]">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              disabled={isSubmitting}
              className="w-full py-3.5 bg-secondary-container hover:opacity-95 text-white font-bold rounded-xl text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Procesando pago seguro...</span>
              ) : (
                <>
                  <span>Tramitar Pedido Seguro</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-[#747688]">
              Pago cifrado SSL de 256 bits · Fabricado en Valencia
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
