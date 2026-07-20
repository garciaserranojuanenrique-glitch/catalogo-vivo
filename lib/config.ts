import type { Config } from "./tipos";

/**
 * ================================================================
 *  TU CONFIGURACIÓN — cámbiala aquí (o desde /configurar).
 *  Esto de ejemplo es el negocio "Raíz" (hecho a mano) para que
 *  veas cómo se ve. Reemplázalo por tu negocio.
 * ================================================================
 */
export const CONFIG: Config = {
  marca: {
    negocio: "Raíz",
    descripcion: "Cosas hechas a mano para tu casa · Guadalajara",
    logo: undefined, // pon "/logo.png" cuando tengas tu logo
    primario: "#0f766e", // verde profundo
    secundario: "#c98a2b", // dorado tierra
    fondo: "claro",
    whatsappPrincipal: "5213300000000", // ← tu WhatsApp (solo números, con código de país)
    ciudad: "Guadalajara, MX",
    enlace: "instagram.com/raiz.hechoamano",
  },

  // Tu equipo. Cada quien comparte su liga: tucatalogo.com/?v=juan
  vendedores: [
    { slug: "juan", nombre: "Juan Ramírez", whatsapp: "5213311111111", puesto: "Ventas" },
    { slug: "sofia", nombre: "Sofía Torres", whatsapp: "5213322222222", puesto: "Ventas" },
    { slug: "raiz", nombre: "Raíz (tienda)", whatsapp: "5213300000000", puesto: "Mostrador" },
  ],

  // El orden de las secciones de tu catálogo.
  categorias: ["Para tu casa", "Talleres", "Servicios"],

  // El mensaje que se abre en WhatsApp. {saludo} y {producto} se llenan solos.
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
