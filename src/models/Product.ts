import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  inventory: number;
  featured: boolean;
  active: boolean;
  specifications: {
    [key: string]: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  images: [{ type: String, required: true }],
  category: { type: String, required: true },
  subcategory: { type: String },
  tags: [{ type: String }],
  sizes: [{ type: String }],
  colors: [{ type: String }],
  inventory: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  specifications: { type: Map, of: String, default: {} }
}, {
  timestamps: true
});

// Add indexes for better performance
ProductSchema.index({ category: 1, active: 1 });
ProductSchema.index({ featured: 1, active: 1 });
ProductSchema.index({ title: 'text', description: 'text', tags: 'text' });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);