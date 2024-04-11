// This file contains types for the database layer.

interface User {
  name: string;
  bio: string;
  following: number;
  followers: number;
  rating: number;
  ratingCount: number;
  avatar: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  category: {
    title: string;
    color: string;
  };
  favorite: boolean;
  lotDays: number;
  lotHours: number;
  lotMinutes: number;
}

interface Category {
  id: number;
  name: string;
  children: Category[];
}

interface Property {
  id: number;
  name: string;
  child: boolean;
  options: Property[];
}

export type { Product, User, Category, Property };
