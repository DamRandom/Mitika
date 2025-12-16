"use client";

import { motion } from "framer-motion";

const menu = {
  cocktails: [
    {
      name: "Mitika Garden",
      description: "Gin infusionado con romero, pepino, limón sutil y tónica premium.",
      price: "32",
    },
    {
      name: "Granada Spritz",
      description: "Vermouth rosso, granada fresca, prosecco y soda.",
      price: "30",
    },
    {
      name: "Oliva Negroni",
      description: "Gin, campari, vermouth y toque de oliva negra.",
      price: "34",
    },
  ],
  classics: [
    {
      name: "Old Fashioned",
      description: "Bourbon, azúcar mascabado y bitter aromático.",
      price: "28",
    },
    {
      name: "Margarita Clásica",
      description: "Tequila blanco, triple sec y limón fresco.",
      price: "26",
    },
  ],
  bites: [
    {
      name: "Tabla Botánica",
      description: "Quesos artesanales, frutos secos, aceitunas y pan rústico.",
      price: "38",
    },
    {
      name: "Bruschettas Mediterráneas",
      description: "Tomate confitado, albahaca y aceite de oliva.",
      price: "24",
    },
  ],
};

export default function Menu() {
  return (
    <section
      id="menu"
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
            Nuestra carta
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            Sabores artesanales
          </h2>
          <p className="max-w-xl text-(--color-texto)">
            Cocktails de autor y clásicos cuidadosamente preparados, acompañados
            de piqueos ideales para compartir.
          </p>
        </motion.div>

        {/* Secciones */}
        <div className="space-y-20">
          {/* Cocktails de autor */}
          <MenuSection
            title="Cocktails de autor"
            items={menu.cocktails}
          />

          {/* Clásicos */}
          <MenuSection
            title="Clásicos"
            items={menu.classics}
          />

          {/* Piqueos */}
          <MenuSection
            title="Piqueos"
            items={menu.bites}
          />
        </div>
      </div>
    </section>
  );
}

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl md:text-3xl mb-10 text-(--color-azul-principal)">
        {title}
      </h3>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-6 border-b border-(--color-mostaza)/40 pb-6"
          >
            <div>
              <h4 className="text-lg font-medium mb-1">
                {item.name}
              </h4>
              <p className="text-sm text-(--color-texto) max-w-md">
                {item.description}
              </p>
            </div>

            <div className="text-lg font-medium text-(--color-coral)">
              S/ {item.price}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
