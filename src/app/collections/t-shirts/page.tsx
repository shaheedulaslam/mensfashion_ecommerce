// app/collections/t-shirts/page.tsx
"use client";

import React from 'react';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';

const tshirts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80",
    description: "100% cotton basic tee",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray"],
    featured: true
  },
  {
    id: 2,
    name: "Premium Organic T-Shirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format&fit=crop&q=80",
    description: "Eco-friendly organic cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Olive", "Maroon"],
    featured: false
  },
  {
    id: 3,
    name: "V-Neck Casual Tee",
    price: 999,
    image: "https://images.unsplash.com/photo-1586362677381-7d0ba6e483c2?w=500&auto=format&fit=crop&q=80",
    description: "Comfortable V-neck design",
    sizes: ["M", "L", "XL"],
    colors: ["White", "Black", "Blue"],
    featured: false
  },
  {
    id: 4,
    name: "Polo T-Shirt",
    price: 1599,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&auto=format&fit=crop&q=80",
    description: "Classic polo style",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Red"],
    featured: true
  },
  {
    id: 5,
    name: "Graphic Print Tee",
    price: 1199,
    image: "https://images.unsplash.com/photo-1586362680630-3cb5a2d6eb38?w=500&auto=format&fit=crop&q=80",
    description: "Trendy graphic prints",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    featured: false
  },
  {
    id: 6,
    name: "Oversized Comfort Tee",
    price: 1099,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=80",
    description: "Relaxed fit oversized tee",
    sizes: ["L", "XL", "XXL"],
    colors: ["Gray", "Black", "Beige"],
    featured: false
  }
];

export default function TShirtsCollection() {
  return (
    <CollectionLayout
      title="Casual T-Shirts"
      description="Comfortable and stylish everyday tees. Perfect for casual outings and relaxed days."
    >
      <ProductGrid products={tshirts} />
    </CollectionLayout>
  );
}