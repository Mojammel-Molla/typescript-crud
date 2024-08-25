import mongoose, { Schema } from 'mongoose';
import { ShoeInventory, ShoeProduct, ShoeVariant } from './product.interface';

// Define the ShoeVariant sub-document schema
const ShoeVariantSchema = new Schema<ShoeVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the ShoeInventory sub-document schema
const ShoeInventorySchema = new Schema<ShoeInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the main ShoeProduct schema
const ShoeProductSchema = new Schema<ShoeProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [ShoeVariantSchema], required: true },
  inventory: { type: ShoeInventorySchema, required: true },
});

export const ShoeProductModel = mongoose.model(
  'ShoeProduct',
  ShoeProductSchema,
);
