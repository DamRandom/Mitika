"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-(--color-marfil)"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-sm uppercase tracking-widest text-(--color-verde-oliva) mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            Hablemos
          </h2>
          <p className="text-(--color-texto) max-w-xl mx-auto">
            Para reservas, consultas o pedidos especiales, escríbenos
            directamente. Te respondemos lo antes posible.
          </p>
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 text-sm font-medium uppercase tracking-wide rounded-full bg-(--color-coral) text-white transition hover:bg-(--color-verde-oliva)"
          >
            Escribir por WhatsApp
          </a>
        </motion.div>

        {/* Info secundaria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 space-y-3 text-sm text-(--color-texto)"
        >
          <p>Instagram: @mitikabar</p>
          <p>Email: hola@mitikabar.com</p>
        </motion.div>
      </div>
    </section>
  );
}
