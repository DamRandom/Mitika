"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-(--color-marfil) px-6 md:px-16"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-(--color-marfil) pointer-events-none" />

      <div className="relative max-w-3xl">
        {/* Marca */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-sm tracking-widest uppercase text-(--color-verde-oliva) mb-4"
        >
          Cocktail Bar · Botánico
        </motion.span>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl leading-tight mb-6"
        >
          Cocktails de autor
          <br />
          <span className="text-(--color-azul-principal)">
            en un ambiente elegante
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-base md:text-lg text-(--color-texto) mb-10 max-w-xl"
        >
          Una experiencia botánica y artesanal donde cada trago está pensado
          para disfrutarse sin prisa. Ideal para tardes tranquilas y noches
          especiales.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#menu"
            className="inline-block px-8 py-3 text-sm font-medium uppercase tracking-wide rounded-full bg-(--color-coral) text-white transition hover:bg-(--color-verde-oliva)"
          >
            Ver carta
          </a>

          <a
            href="#delivery"
            className="inline-block px-8 py-3 text-sm font-medium uppercase tracking-wide rounded-full border border-(--color-azul-principal) text-(--color-azul-principal) transition hover:bg-(--color-azul-principal) hover:text-(--color-marfil)"
          >
            Pedir delivery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
