import { Injectable } from '@angular/core';
import { MenuCategory } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {

  getCategories(): MenuCategory[] {
    return [
      {
        id: 'hamburguesas',
        name: 'Hamburguesas',
        emoji: '🍔',
        items: [
          {
            id: 1,
            name: 'Hamburguesa Tradicional',
            description: 'Carne de res, jamón, queso, cebolla grillé, lechuga, tomate y papa a la francesa.',
            price: 16000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Hamburguesa de Pollo',
            description: 'Pollo desmechado, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 17000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Hamburguesa Doble Carne',
            description: 'Doble Carne, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 20000,
            image: 'no-image.png'
          },
          {
            id: 4,
            name: 'Hamburguesa Especial',
            description: 'Carne de res, pollo, tocineta, jamón, queso, lechuga, cebolla grillé, tomate, aritos de cebolla y papa a la francesa.',
            price: 21000,
            image: 'no-image.png'
          },
          {
            id: 5,
            name: 'Hamburguesa Campesina',
            description: 'Carne, pollo desmechado, huevo frito, arepa de queso, tocineta, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 22000,
            image: 'no-image.png'
          },
          {
            id: 6,
            name: 'Hamburguesa Mixta',
            description: 'Doble carne, pollo desmechado, tocineta, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 23000,
            image: 'no-image.png'
          },
          {
            id: 7,
            name: 'Hamburguesa Super Especial',
            description: 'Doble carne, pollo desmechado, tocineta, maíz tierno, chorizo, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 24000,
            image: 'burguer-super-especial.jpg'
          },
          {
            id: 8,
            name: 'Hamburguesa de la Abuela',
            description: 'Carne de res, carne desmechada, chorizo, tocineta, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 24000,
            image: 'no-image.png'
          },
          {
            id: 9,
            name: 'Hamburguesa Podesora',
            description: 'Carne de res, filete de cerdo, filete de pechuga, chorizo, tocineta, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 28000,
            image: 'no-image.png'
          },
          {
            id: 10,
            name: 'VillaBurger',
            description: 'Triple carne, pollo desmechado, tocineta, maíz tierno, chorizo, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 35000,
            image: 'no-image.png'
          },
          {
            id: 11,
            name: 'Hamburguesa Tortilla',
            description: 'Carne de res, filete de pechuga, tocineta, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 25000,
            image: 'no-image.png'
          },
          {
            id: 12,
            name: 'Hamburguesa Gomela',
            description: 'Carne de res, pollo desmechado, carne desmechada, filete de pechuga, filete de cerdo, aguacate, maíz tierno, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 40000,
            image: 'no-image.png'
          },
          {
            id: 13,
            name: 'Hamburguesa Patacón',
            description: 'Carne desmechada, pollo desmechado, maíz tierno, tocineta, aritos de cebolla, queso, jamón lechuga, tomate, cebolla grillé y papas a la francesa',
            price: 30000,
            image: 'no-image.png'
          }
        ]
      },
      {
        id: 'perros',
        name: 'Perros Calientes',
        emoji: '🌭',
        items: [
          {
            id: 1,
            name: 'Perro Tradicional',
            description: 'Salchicha zenú, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 13000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Perro Mixto',
            description: 'Salchicha Americana, pollo desmechado, maíz tierno, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 20000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Perro Especial Tradicional',
            description: 'Salchicha zenú, pollo desmechado, tocineta, jamón, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 18000,
            image: 'perro-especial-tradicional.png'
          },
          {
            id: 4,
            name: 'Perro Especial Americano',
            description: 'Salchicha Americana, pollo desmechado, tocineta, jamón, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 20000,
            image: 'no-image.png'
          },
          {
            id: 5,
            name: 'Perro Americano',
            description: 'Salchicha Americana, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 16000,
            image: 'no-image.png'
          },
          {
            id: 6,
            name: 'Choriperro Especial',
            description: 'Chorizo, pollo desmechado, tocineta, jamón, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 21000,
            image: 'no-image.png'
          },
          {
            id: 7,
            name: 'Choriperro',
            description: 'Chorizo, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 17000,
            image: 'no-image.png'
          },
          {
            id: 8,
            name: 'Perro Loco',
            description: 'Salchicha zenú, pollo desmechado, tocineta, jamón, carne en trocitos, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 22000,
            image: 'no-image.png'
          },
          {
            id: 9,
            name: 'Perro Villaburger',
            description: 'Chorizo, carne en trocitos, pechuga en trocitos, filete de cerdo, tocineta, pepino, lechuga, tomate, papa picada, queso rayado, queso tajado, cebolla y papa a la francesa',
            price: 28000,
            image: 'no-image.png'
          },
        ]
      },
      {
        id: 'picadas',
        name: 'Picadas de Carnes',
        emoji: '🥩',
        items: [
          {
            id: 1,
            name: 'Picada Mixta (2 máx)',
            description: 'Carne de res, cerdo, pechuga, salchicha americana, chorizo, ensalada, cebollitas y papa a la francesa.',
            price: 28000,
            image: 'picada-mixta-2-personas.jpg'
          },
          {
            id: 2,
            name: 'Picada Mixta (3 máx)',
            description: 'Carne de res, cerdo, pechuga, salchicha americana, chorizo, ensalada, cebollitas y papa a la francesa.',
            price: 36000,
            image: 'picada-mixta-3-personas.jpg'
          },
          {
            id: 3,
            name: 'Picada Mixta (4 máx)',
            description: 'Carne de res, cerdo, pechuga, salchicha americana, chorizo, ensalada, cebollitas y papa a la francesa.',
            price: 48000,
            image: 'picada-mixta-4-personas.jpg'
          }
        ]
      },
      {
        id: 'salchichori',
        name: 'Salchipapas & Choripapas',
        emoji: '🍟',
        items: [
          {
            id: 1,
            name: 'Salchipapa Tradicional',
            description: 'Salchicha zenú, papa a la francesa y salsas.',
            price: 14000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Salchipapa Americano',
            description: 'Salchicha americana, papa a la francesa y salsas.',
            price: 16000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Salchipapa Americano Especial',
            description: 'Salchicha americana, pollo desmechado, maíz tierno, tocineta, queso tajado, lechuga y papa a la francesa.',
            price: 26000,
            image: 'no-image.png'
          },
          {
            id: 4,
            name: 'Salchipapa Especial',
            description: 'Salchicha zenú, pollo desmechado, maíz tierno, tocineta, queso tajado, lechuga y papa a la francesa.',
            price: 24000,
            image: 'no-image.png'
          },
          {
            id: 5,
            name: 'Choripapa Tradicional',
            description: 'Chorizo, papa a la francesa y salsas.',
            price: 16000,
            image: 'no-image.png'
          },
          {
            id: 6,
            name: 'Choripapa Especial',
            description: 'Chorizo, pollo desmechado, maíz tierno, tocineta, queso tajado, lechuga y papa a la francesa.',
            price: 24000,
            image: 'no-image.png'
          },
          {
            id: 7,
            name: 'Salchi-Chori Tradicional',
            description: 'Chorizo, salchicha zenú, papa a la francesa y salsas.',
            price: 20000,
            image: 'no-image.png'
          },
          {
            id: 8,
            name: 'Salchi-Chori Especial',
            description: 'Chorizo, salchicha zenú, pollo desmechado, maíz tierno, tocineta, queso tajado, lechuga y papa a la francesa.',
            price: 26000,
            image: 'no-image.png'
          },
          {
            id: 9,
            name: 'Salchipapa Villaburger',
            description: 'Chorizo, pollo desmechado, maíz tierno, tocineta, queso tajado, lechuga y papa a la francesa.',
            price: 38000,
            image: 'no-image.png'
          }

        ]
      },
      {
        id: 'parrilla',
        name: 'A la Parrilla',
        emoji: '🔥',
        items: [
          {
            id: 1,
            name: 'Pechuga a la Plancha',
            description: 'Filete de pechuga, ensalada, cebollitas y papa a la francesa.',
            price: 24000,
            image: 'pechuga-ala-plancha.jpg'
          },
          {
            id: 2,
            name: 'Churrasco de Chatas',
            description: 'Filete de chatas, ensalada, cebollitas y papa a la francesa.',
            price: 25000,
            image: 'churrasco-de-chatas.jpg'
          },
          {
            id: 3,
            name: 'Lomo de Cerdo',
            description: 'Filete de cerdo, ensalada, cebollitas y papa a la francesa.',
            price: 24000,
            image: 'no-image.png'
          }
          ,
          {
            id: 4,
            name: 'Alitas BBQ',
            description: 'Alitas de pollo, ensalada, cebollitas y papa a la francesa.',
            price: 20000,
            image: 'no-image.png'
          }
        ]
      },
      {
        id: 'arepas',
        name: 'Arepas',
        emoji: '🫓',
        items: [
          {
            id: 1,
            name: 'Arepa Sencilla',
            description: 'Arepa asada con queso derretido, queso rayado, cebolla picada, papa picada y salsas.',
            price: 6000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Arepa de Carne',
            description: 'Arepa asada con queso derretido, carne de res, queso rayado, cebolla picada, papa picada y salsas.',
            price: 10000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Arepa de Pollo',
            description: 'Arepa asada con queso derretido, pollo desmechado,  queso rayado, cebolla picada, papa picada y salsas.',
            price: 10000,
            image: 'no-image.png'
          },
          {
            id: 4,
            name: 'Arepa Mixta',
            description: 'Arepa asada con queso derretido, pollo desmechado, carne de res, queso rayado, cebolla picada, papa picada y salsas.',
            price: 13000,
            image: 'no-image.png'
          }
        ]
      },
      {
        id: 'degranadosPapas',
        name: 'Degranados y Papas',
        emoji: '🍟',
        items: [
          {
            id: 1,
            name: 'Mazorcada Personal',
            description: 'Maíz tierno, salchicha zenú, pollo desmechado, queso tajado y papa a la francesa.',
            price: 16000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Mazorcada Especial',
            description: 'Maíz tierno, salchicha zenú, pollo desmechado, tocineta, queso tajado y papa a la francesa.',
            price: 22000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Mazorcada Mixta',
            description: 'Maíz tierno, Carne en trocitos, maduro, chorizo, pollo desmechado, tocineta, queso tajado y papa a la francesa.',
            price: 32000,
            image: 'no-image.png'
          },
          {
            id: 4,
            name: 'Morrongo',
            description: 'Carne de res, pechuga picada, chorizo, salchicha zenú, maíz tierno, lechuga, cebolla grillé y queso tajado.',
            price: 22000,
            image: 'morrongo.jpg'
          },
          {
            id: 5,
            name: 'Papas Locas',
            description: 'Carne en trocitos, maíz tierno, pollo desmechado, salchicha zenú, queso tajado, tocineta, cebolla grillé y papa a la francesa.',
            price: 24000,
            image: 'papas-locas.jpg'
          },
          {
            id: 6,
            name: 'Papas Locas Especiales',
            description: 'Carne desmechada, maíz tierno, pollo desmechado, chorizo, queso tajado, tocineta, cebolla grillé y papa a la francesa.',
            price: 30000,
            image: 'no-image.png'
          },
          {
            id: 7,
            name: 'Papas Locas Poderosas',
            description: 'Pechuga picada, maíz tierno, cerdo picado, chorizo, queso tajado, tocineta, y papa a la francesa.',
            price: 32000,
            image: 'no-image.png'
          },
          {
            id: 8,
            name: 'Papas Locas Mixtas',
            description: 'Carne en trocitos, pechuga picada, cerdo picado, maíz tierno, chicharron, chorizo, queso tajado, tocineta, aros de cebolla y papa amarilla',
            price: 45000,
            image: 'no-image.png'
          },
          {
            id: 9,
            name: 'Patacón',
            description: 'Carne desmechada, pollo desmechado, jamón, tocineta, salchicha zenú, lechuga y queso tajado.',
            price: 30000,
            image: 'no-image.png'
          },
          {
            id: 10,
            name: 'Porción de papas',
            description: 'Papa a la francesa y queso rayado.',
            price: 9000,
            image: 'no-image.png'
          }
        ]
      },
      {
        id: 'sandwiches',
        name: 'Sandwiches',
        emoji: '🥪',
        items: [
          {
            id: 1,
            name: 'Sandwich Mixto',
            description: 'Carne desmechada, pollo desmechado, maíz tierno, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 20000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Sandwich de Pollo',
            description: 'Pollo desmechado, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 17000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Sandwich de Carne',
            description: 'Carne desmechada, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 10000,
            image: 'no-image.png'
          },
          {
            id: 4,
            name: 'Sandwich Ranchero',
            description: 'Salchicha zenú, salami, maíz tierno, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 13000,
            image: 'no-image.png'
          }
        ]
      },
      {
        id: 'bebidas',
        name: 'Bebidas',
        emoji: '🥤',
        items: [
          {
            id: 1,
            name: 'Granizada en Agua',
            description: 'Carne desmechada, pollo desmechado, maíz tierno, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 6000,
            image: 'no-image.png'
          },
          {
            id: 2,
            name: 'Granizada en leche',
            description: 'Pollo desmechado, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 7000,
            image: 'no-image.png'
          },
          {
            id: 3,
            name: 'Milo',
            description: 'Carne desmechada, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 7000,
            image: 'no-image.png'
          },
          {
            id: 4,
            name: 'Sandwich Ranchero',
            description: 'Salchicha zenú, salami, maíz tierno, jamón, queso tajado, lechuga, pepino, pimentón, cebolla, tomate y papa a la francesa.',
            price: 13000,
            image: 'no-image.png'
          }
        ]
      }
    ];
  }
}
