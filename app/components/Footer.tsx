"use client";

export default function Footer() {
  return (
    <footer className="bg-(--color-azul-principal) text-(--color-marfil) px-6 md:px-16 py-14">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Marca */}
          <div>
            <h3 className="text-2xl mb-3">Mitika</h3>
            <p className="text-sm text-(--color-marfil)/80 max-w-xs">
              Cocktails de autor, ingredientes botánicos y un ambiente pensado
              para disfrutar sin prisa.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-(--color-mostaza)">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="hover:underline">Carta</a></li>
              <li><a href="#delivery" className="hover:underline">Delivery</a></li>
              <li><a href="#events" className="hover:underline">Eventos</a></li>
              <li><a href="#gallery" className="hover:underline">Galería</a></li>
              <li><a href="#location" className="hover:underline">Ubicación</a></li>
              <li><a href="#contact" className="hover:underline">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-(--color-mostaza)">
              Contacto
            </h4>
            <p className="text-sm text-(--color-marfil)/80">
              WhatsApp: +51 999 999 999
              <br />
              Instagram: @mitikabar
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-(--color-marfil)/60">
          © {new Date().getFullYear()} Mitika Bar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
