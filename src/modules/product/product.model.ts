import { Schema, model } from 'mongoose';
import { ShoeInventory, ShoeProduct, ShoeVariant } from './product.interface';
import { boolean } from 'zod';

const ShoeVariantSchema = new Schema<ShoeVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const ShoeInventorySchema = new Schema<ShoeInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const ShoeProductSchema = new Schema<ShoeProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [ShoeVariantSchema], required: true },
  inventory: { type: ShoeInventorySchema, required: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

ShoeProductSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

ShoeProductSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const ShoeProductModel = model<ShoeProduct>(
  'ShoeProduct',
  ShoeProductSchema,
);
