// app/collections/formal-pants/page.tsx
"use client";

import React from 'react';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';

const formalPants = [
  {
    id: 1,
    name: "Classic Fit Dress Trousers",
    price: 2899,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=80",
    description: "Timeless classic fit trousers",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Black", "Navy", "Gray"],
    featured: true
  },
  {
    id: 2,
    name: "Slim Fit Formal Pants",
    price: 2699,
    image: "https://images.unsplash.com/photo-1584370848018-ea1c6f323c6e?w=500&auto=format&fit=crop&q=80",
    description: "Modern slim fit design",
    sizes: ["28", "30", "32", "34"],
    colors: ["Charcoal", "Navy"],
    featured: false
  },
  {
    id: 3,
    name: "Wool Blend Dress Pants",
    price: 4499,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&auto=format&fit=crop&q=80",
    description: "Premium wool blend fabric",
    sizes: ["32", "34", "36", "38"],
    colors: ["Gray", "Black"],
    featured: true
  },
  {
    id: 4,
    name: "Pleated Formal Trousers",
    price: 3199,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500&auto=format&fit=crop&q=80",
    description: "Classic pleated front",
    sizes: ["30", "32", "34", "36"],
    colors: ["Navy", "Brown"],
    featured: false
  },
  {
    id: 5,
    name: "Tailored Fit Dress Pants",
    price: 3599,
    image: "https://images.unsplash.com/photo-1506629905607-e48b0e67d879?w=500&auto=format&fit=crop&q=80",
    description: "Perfect tailored fit",
    sizes: ["29", "31", "33", "35"],
    colors: ["Black", "Gray"],
    featured: false
  },
  {
    id: 6,
    name: "Stretch Comfort Trousers",
    price: 2399,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=80",
    description: "Comfort stretch fabric",
    sizes: ["30", "32", "34", "36"],
    colors: ["Navy", "Black"],
    featured: false
  }
];

export default function FormalPantsCollection() {
  return (
    <CollectionLayout
      title="Formal Pants"
      description="Tailored trousers for business and special occasions. Perfect fit guaranteed."
    >
      <ProductGrid products={formalPants} />
    </CollectionLayout>
  );
}