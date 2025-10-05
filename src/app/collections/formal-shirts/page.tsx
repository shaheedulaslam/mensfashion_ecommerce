// app/collections/formal-shirts/page.tsx
"use client";

import React from 'react';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';

const formalShirts = [
  {
    id: 1,
    name: "Classic White Formal Shirt",
    price: 1899,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80",
    description: "Premium cotton dress shirt with classic fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue"],
    featured: true
  },
  {
    id: 2,
    name: "Slim Fit Blue Dress Shirt",
    price: 2199,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&auto=format&fit=crop&q=80",
    description: "Slim fit shirt in premium cotton",
    sizes: ["S", "M", "L"],
    colors: ["Navy", "Sky Blue"],
    featured: false
  },
  {
    id: 3,
    name: "Premium Linen Dress Shirt",
    price: 2799,
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=80",
    description: "Breathable linen shirt for summer",
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "White"],
    featured: true
  },
  {
    id: 4,
    name: "French Cuff Formal Shirt",
    price: 3299,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500&auto=format&fit=crop&q=80",
    description: "Luxury shirt with French cuffs",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue"],
    featured: false
  },
  {
    id: 5,
    name: "Striped Business Shirt",
    price: 1999,
    image: "https://images.unsplash.com/photo-1602810316693-3664ba6f46f4?w=500&auto=format&fit=crop&q=80",
    description: "Professional striped shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue/White", "Pink/White"],
    featured: false
  },
  {
    id: 6,
    name: "Spread Collar Dress Shirt",
    price: 2499,
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=500&auto=format&fit=crop&q=80",
    description: "Elegant spread collar design",
    sizes: ["M", "L", "XL"],
    colors: ["White", "Light Blue"],
    featured: false
  }
];

export default function FormalShirtsCollection() {
  return (
    <CollectionLayout
      title="Formal Shirts"
      description="Premium dress shirts crafted for the modern professional. Perfect fit, superior comfort."
    >
      <ProductGrid products={formalShirts} />
    </CollectionLayout>
  );
}