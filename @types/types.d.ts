// This file contains types for the types layer.
import { Property } from './database';

interface SelectedValue {
  key: {
    id: number | string;
    name: string;
  };
  value: {
    id: number | string;
    name: string;
  };
}

interface OptionChild {
  [key: string]: { id: number; name: string }[];
}

export type { SelectedValue, OptionChild };
