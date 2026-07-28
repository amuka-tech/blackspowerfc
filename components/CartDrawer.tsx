"use client";
import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, removeItem, updateQty, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Cart button */}
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center justify-center w-10 h-10 text-brand-light hover:text-brand-red transition-colors"
        aria-label="Open cart"
      >
        <ShoppingCart size={22} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-black font-heading rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-[60] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-gray z-[70] shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide">Your Cart</h2>
          <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingCart size={48} className="text-gray-700" />
              <p className="text-gray-500 font-heading uppercase tracking-wider">Your cart is empty</p>
              <Button variant="solidRed" className="uppercase" onClick={() => setOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-black rounded-xl p-4 border border-gray-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-sm uppercase truncate">{item.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Size: <span className="text-white">{item.size}</span></p>
                  <p className="text-brand-red font-heading font-bold mt-1">UGX {(item.price * item.quantity).toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(item.id, item.size, item.quantity - 1)} className="w-7 h-7 bg-brand-gray rounded flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
                      <Minus size={12} />
                    </button>
                    <span className="font-heading font-bold text-sm w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.size, item.quantity + 1)} className="w-7 h-7 bg-brand-gray rounded flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
                      <Plus size={12} />
                    </button>
                    <button onClick={() => removeItem(item.id, item.size)} className="ml-auto text-gray-600 hover:text-brand-red transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-heading uppercase tracking-wider text-sm">Total</span>
              <span className="font-heading font-black text-2xl text-white">UGX {totalPrice.toLocaleString()}</span>
            </div>
            <Button variant="solidRed" className="w-full uppercase tracking-widest text-sm font-black">
              Checkout
            </Button>
            <button onClick={() => setOpen(false)} className="w-full text-center text-gray-500 hover:text-white text-sm uppercase font-heading tracking-wider transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
