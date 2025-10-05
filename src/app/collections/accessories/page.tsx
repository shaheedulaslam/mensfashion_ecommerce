// app/collections/accessories/page.tsx
"use client";

import React from 'react';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';

const accessories = [
  {
    id: 1,
    name: "Leather Dress Belt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&auto=format&fit=crop&q=80",
    description: "Genuine leather belt",
    sizes: ["32", "34", "36", "38"],
    colors: ["Black", "Brown"],
    featured: true
  },
  {
    id: 2,
    name: "Silk Necktie",
    price: 899,
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=500&auto=format&fit=crop&q=80",
    description: "Premium silk tie",
    sizes: ["Regular"],
    colors: ["Navy", "Burgundy", "Gray"],
    featured: false
  },
  {
    id: 3,
    name: "Designer Socks Pack",
    price: 699,
    image: "https://images.unsplash.com/photo-1586362680630-3cb5a2d6eb38?w=500&auto=format&fit=crop&q=80",
    description: "3 pairs designer socks",
    sizes: ["One Size"],
    colors: ["Assorted"],
    featured: true
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 1599,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80",
    description: "Genuine leather wallet",
    sizes: ["Regular"],
    colors: ["Black", "Brown"],
    featured: false
  },
  {
    id: 5,
    name: "Cufflinks Set",
    price: 1199,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500&auto=format&fit=crop&q=80",
    description: "Elegant cufflinks pair",
    sizes: ["One Size"],
    colors: ["Silver", "Gold"],
    featured: false
  },
  {
    id: 6,
    name: "Pocket Square",
    price: 499,
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=500&auto=format&fit=crop&q=80",
    description: "Silk pocket square",
    sizes: ["One Size"],
    colors: ["White", "Blue", "Burgundy"],
    featured: false
  }
];

export default function AccessoriesCollection() {
  return (
    <CollectionLayout
      title="Accessories"
      description="Complete your look with our premium accessories. From belts to ties, find the perfect finishing touch."
    >
      <ProductGrid products={accessories} />
    </CollectionLayout>
  );
}