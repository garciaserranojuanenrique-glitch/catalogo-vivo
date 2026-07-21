import type { Producto } from "./tipos";

// Productos generados siguiendo la "anatomía del que vende" (CLAUDE.md).
// Nota: verifica los nombres de los campos contra tu lib/tipos.ts real
// y ajústalos si difieren un poco (este archivo se armó sin ver ese archivo).

export const PRODUCTOS: Producto[] = [
  {
    slug: "paletas-de-leche",
    nombre: "Paletas de Leche",
    categoria: "Barras para tu evento",
    imagen: "/productos/paletas-de-leche.jpg",
    destacado: true, // la más pedida esta temporada de verano
    paraQuien:
      "Para tu boda, XV años o reunión de verano, con más de 30 invitados que quieren algo dulce y fresco",
    beneficio:
      "Tus invitados arman su paleta de leche como más les gusta, con el sabor y los toppings que elijan",
    caracteristicas: [
      "9 sabores a elegir: capuccino, chocolate, cookies and cream, cajeta, fresa, membrillo, pistache, plátano y coco",
      "12 toppings para decorar: bombones, cacahuates, almendra, lunetas, galleta oreo, coco, sprinkles, mazapán, chocolate, nutella, lechera y cajeta",
      "Personal atendiendo la barra",
    ],
    precio: "$60 por persona · mínimo 30 personas ($1,800)",
    facilidades: "30% de anticipo para apartar tu fecha, el resto el día del evento",
  },
  {
    slug: "papas-locas",
    nombre: "Papas Locas",
    categoria: "Barras para tu evento",
    imagen: "/productos/papas-locas.jpg",
    destacado: false,
    paraQuien:
      "Para tu evento, boda o reunión con más de 30 invitados que quieren algo salado y picosito",
    beneficio:
      "Tus invitados arman su propio vaso de papas locas, justo como les gusta",
    caracteristicas: [
      "15 toppings a elegir: rielitos, cacahuates, manguitos, gusanitos, cueritos, pepino, jícama, churros, salsa, chamoy, clamato y más",
      "Porciones en vaso de 8 oz, con personal atendiendo la barra",
      "Servicio de 2 horas o hasta agotar las porciones contratadas",
    ],
    precio: "$70 por persona · mínimo 30 personas ($2,100)",
    facilidades: "30% de anticipo para apartar tu fecha, el resto el día del evento",
  },
  {
    slug: "mini-pancakes",
    nombre: "Mini Pancakes",
    categoria: "Barras para tu evento",
    imagen: "/productos/mini-pancakes.jpg",
    destacado: false,
    paraQuien:
      "Para tu evento matutino, brunch o reunión con más de 30 invitados que quieren algo dulce y esponjosito",
    beneficio:
      "Tus invitados arman su plato de mini pancakes con el topping que más se les antoje",
    caracteristicas: [
      "16 toppings para disfrutar: cacahuates, plátano, fresa, almendra, bombones, lunetas, galleta oreo, coco, chocolate kinder, sprinkles, mazapán, chocolate, lechera, nutella, miel y cajeta",
      "Personal atendiendo la barra",
      "Servicio de 2 horas o hasta agotar las porciones contratadas",
    ],
    precio: "$65 por persona · mínimo 30 personas ($1,950)",
    facilidades: "30% de anticipo para apartar tu fecha, el resto el día del evento",
  },
];

export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((producto) => producto.slug === slug);
}
