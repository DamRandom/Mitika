"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-(--color-marfil) px-6 md:px-20 overflow-hidden"
    >
      {/* Aura / textura de fondo */}
      <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-(--color-verde-hoja)/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-150 h-150 rounded-full bg-(--color-azul-principal)/10 blur-[140px]" />

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div>
          {/* Marca */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="block text-sm tracking-widest uppercase text-[var(--color-verde-oliva)] mb-6"
          >
            Cocktail Bar · Botánico
          </motion.span>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl leading-tight mb-6"
          >
            Cocktails de autor
            <br />
            <span className="text-[var(--color-azul-principal)]">
              para disfrutar sin prisa
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-base md:text-lg text-[var(--color-texto)] mb-12 max-w-xl"
          >
            Una experiencia elegante y artesanal donde los ingredientes
            botánicos, el ambiente y el detalle se encuentran en cada trago.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#menu"
              className="px-9 py-3 text-sm font-medium uppercase tracking-wide rounded-full bg-[var(--color-coral)] text-white shadow-lg shadow-[var(--color-coral)]/20 transition hover:bg-[var(--color-verde-oliva)]"
            >
              Ver carta
            </a>

            <a
              href="#delivery"
              className="px-9 py-3 text-sm font-medium uppercase tracking-wide rounded-full border border-[var(--color-azul-principal)] text-[var(--color-azul-principal)] transition hover:bg-[var(--color-azul-principal)] hover:text-[var(--color-marfil)]"
            >
              Pedir delivery
            </a>
          </motion.div>
        </div>

        {/* Logo / elemento visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/60 backdrop-blur-xl shadow-2xl shadow-black/10 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Mitika Bar Logo"
              width={180}
              height={180}
              className="opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
