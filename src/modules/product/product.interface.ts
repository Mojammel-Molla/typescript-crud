export type ShoeVariant = {
  type: string;
  value: string;
};

export type ShoeInventory = {
  quantity: number;
  inStock: boolean;
};

export type ShoeProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: ShoeVariant[];
  inventory: ShoeInventory;
  isDeleted: boolean;
};
