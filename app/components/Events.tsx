"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Happy Hour Botánico",
    description:
      "Selección de cocktails de autor con precio especial para empezar la noche con calma.",
    schedule: "Martes a jueves · 6:00 – 8:00 pm",
  },
  {
    title: "Noches de Jazz & Soul",
    description:
      "Música en vivo o playlists curadas que acompañan la experiencia sin romper el ambiente.",
    schedule: "Viernes · desde las 8:00 pm",
  },
  {
    title: "Domingos de Autor",
    description:
      "Cocktails fuera de carta, ediciones limitadas y creaciones especiales del bartender.",
    schedule: "Domingos · todo el día",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-24 px-6 md:px-16 bg-(--color-marfil)"
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
          <span className="block text-sm uppercase tracking-widest text-(--color-verde-oliva) mb-4">
            Eventos & promos
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            Momentos especiales
          </h2>
          <p className="max-w-xl text-(--color-texto)">
            Cada semana creamos experiencias pensadas para disfrutar el bar de
            una manera distinta, siempre manteniendo nuestro espíritu artesanal.
          </p>
        </motion.div>

        {/* Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="border border-(--color-mostaza)/40 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl mb-3 text-(--color-azul-principal)">
                {event.title}
              </h3>

              <p className="text-sm text-(--color-texto) mb-6">
                {event.description}
              </p>

              <span className="text-xs uppercase tracking-wide text-(--color-coral)">
                {event.schedule}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
