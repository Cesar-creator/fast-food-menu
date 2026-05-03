export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}
