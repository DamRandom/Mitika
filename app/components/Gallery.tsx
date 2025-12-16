"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Cocktail de autor en barra",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Detalle botánico y decoración del bar",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Ambiente nocturno elegante",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Preparación artesanal de cocktails",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Piqueos y mesa compartida",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-16 bg-(--color-marfil)"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="block text-sm uppercase tracking-widest text-(--color-verde-oliva) mb-4">
            Galería
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            El ambiente Mitika
          </h2>
          <p className="text-(--color-texto)">
            Luz tenue, detalles botánicos y una atmósfera pensada para quedarse.
            Así se vive Mitika, tanto de día como de noche.
          </p>
        </motion.div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
