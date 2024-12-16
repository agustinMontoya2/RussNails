export interface Nails {
    nails: Nail[]; // Array de uñas
  }

  export interface Nail {
    id: string; // Identificador único
    nombre: string; // Nombre de la uña
    descripcion: string; // Descripción de la uña
    precio: number; // Precio de la uña
    imagenes: string[]; // Array de URLs de imágenes
  }
  