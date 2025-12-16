"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 px-6 md:px-16 bg-(--color-azul-principal) text-(--color-marfil)"
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
          <span className="block text-sm uppercase tracking-widest text-(--color-mostaza) mb-4">
            Ubicación & horarios
          </span>
          <h2 className="text-3xl md:text-5xl mb-4">
            Te esperamos en Mitika
          </h2>
          <p className="text-(--color-marfil)/80">
            Un espacio pensado para desconectar del ruido y disfrutar de buenos
            cocktails en un ambiente cálido y elegante.
          </p>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-2">Dirección</h3>
              <p className="text-(--color-marfil)/80">
                Av. Los Cedros 456, Miraflores
                <br />
                Lima, Perú
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Horarios</h3>
              <p className="text-(--color-marfil)/80">
                Martes a jueves · 6:00 pm – 12:00 am
                <br />
                Viernes y sábado · 6:00 pm – 2:00 am
                <br />
                Domingo · 5:00 pm – 11:00 pm
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Contacto</h3>
              <p className="text-(--color-marfil)/80">
                WhatsApp: +51 999 999 999
                <br />
                Instagram: @mitikabar
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full h-90 rounded-2xl overflow-hidden border border-white/20">
            <iframe
              title="Mapa Mitika"
              src="https://www.google.com/maps?q=Miraflores,Lima&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
