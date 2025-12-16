"use client";

import { motion } from "framer-motion";

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="py-24 px-6 md:px-16 bg-(--color-azul-secundario) text-(--color-marfil)"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="block text-sm uppercase tracking-widest text-(--color-mostaza) mb-4">
            Delivery
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            Disfruta Mitika en casa
          </h2>
          <p className="max-w-xl text-(--color-marfil)/80">
            Nuestros cocktails y piqueos llegan a tu puerta, preparados al
            momento y con el mismo cuidado que en el bar.
          </p>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
        >
          <DeliveryItem
            title="Horarios"
            content="Martes a domingo · 6:00 pm – 11:30 pm"
          />
          <DeliveryItem
            title="Zonas"
            content="Miraflores · Barranco · San Isidro"
          />
          <DeliveryItem
            title="Pedidos"
            content="Vía WhatsApp · Atención inmediata"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-sm font-medium uppercase tracking-wide rounded-full bg-(--color-coral) text-white transition hover:bg-(--color-verde-oliva)"
          >
            Pedir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DeliveryItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-xl mb-3 text-(--color-marfil)">
        {title}
      </h3>
      <p className="text-sm text-(--color-marfil)/80">
        {content}
      </p>
    </div>
  );
}
