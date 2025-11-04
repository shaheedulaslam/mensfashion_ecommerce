import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  orders: mongoose.Types.ObjectId[];
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, default: 'India' }
  },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  totalOrders: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  lastOrderDate: { type: Date }
}, {
  timestamps: true
});

// Add indexes for better performance
CustomerSchema.index({ email: 1 });
CustomerSchema.index({ name: 'text', email: 'text' });
CustomerSchema.index({ totalSpent: -1 });
CustomerSchema.index({ totalOrders: -1 });

export default mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);