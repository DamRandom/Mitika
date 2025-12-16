"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 bg-(--color-marfil)"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-sm uppercase tracking-widest text-(--color-verde-oliva) mb-4">
            Sobre Mitika
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            Un espacio para disfrutar sin prisa
          </h2>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-(--color-texto)"
        >
          <p>
            Mitika nace como un bar de cocktails de autor donde la calma, el
            detalle y el respeto por los ingredientes son parte esencial de la
            experiencia. Cada trago está pensado para acompañar conversaciones
            largas y momentos que no necesitan prisa.
          </p>

          <p>
            Nuestro enfoque botánico se refleja tanto en la carta como en el
            ambiente: hierbas frescas, frutas naturales y una selección cuidada
            de destilados que dan forma a sabores equilibrados y elegantes.
          </p>

          <p>
            Más que un bar nocturno, Mitika es un punto de encuentro para quienes
            disfrutan de lo artesanal, lo bien hecho y lo auténtico.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
