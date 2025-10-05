"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100"
            onClick={() => setMobileMenu((s) => !s)}
            aria-label="menu"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-baseline gap-2">
            <span className="font-extrabold text-2xl tracking-tight">90s</span>
            <span className="text-sm text-zinc-500">Mens Fashion</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-4 text-sm text-zinc-700">
            <a className="hover:text-black" href="#collections">
              Collections
            </a>
            <a className="hover:text-black" href="#trending">
              Trending
            </a>
            <a className="hover:text-black" href="#about">
              About
            </a>
          </nav>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-72 px-3 py-2 rounded-md border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              placeholder="Search shirts, pants, hats..."
            />
          </div>
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 rounded-md hover:bg-zinc-100"
            aria-label="account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M12 7a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          </button>
          <button
            onClick={() => {
                router.push("/cart");
                setMobileMenu(false);
            }}
            className="relative p-2 rounded-md hover:bg-zinc-100"
            aria-label="cart"
          >
            <ShoppingCart size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs px-1.5 rounded">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden border-t border-zinc-100"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-zinc-100"
                placeholder="Search..."
              />
              <a className="py-2" href="#collections">
                Collections
              </a>
              <a className="py-2" href="#trending">
                Trending
              </a>
              <a className="py-2" href="#about">
                About
              </a>
              <button
                onClick={() => {
                  router.push("/cart");
                  setMobileMenu(false);
                }}
                className="py-2 text-left flex items-center gap-2"
              >
                <ShoppingCart size={18} />
                Cart ({cart.length})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}