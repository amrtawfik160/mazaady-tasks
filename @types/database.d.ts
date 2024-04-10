// This file contains types for the database layer.

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

export type { Category, Property };
