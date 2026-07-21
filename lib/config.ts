import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "DELICHOCHO",
    descripcion: "SNACK BAR, PARA EVENTOS Y REUNIONES",
    logo: "/logo.png",
    primario: "#9a3412",
    secundario: "#3f6212",
    fondo: "claro",
    whatsappPrincipal: "526462673893",
    ciudad: "ENSENADA,MX",
    enlace: "https://www.instagram.com/delichocho.snackbar?igsh=MWY5bmcwd25jaXowMg==",
  },
  vendedores: [
    { slug: "elvira", nombre: "ELVIRA ", whatsapp: "526463404647" },
    { slug: "oscar", nombre: "OSCAR", whatsapp: "526462673893" },
  ],
  categorias: ["Barras para tu evento"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
