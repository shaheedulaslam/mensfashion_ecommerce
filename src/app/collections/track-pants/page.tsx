// app/collections/track-pants/page.tsx
"use client";

import React from 'react';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';

const trackPants = [
  {
    id: 1,
    name: "Classic Jogger Track Pants",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=80",
    description: "Essential jogger style",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    featured: true
  },
  {
    id: 2,
    name: "Premium Fleece Track Pants",
    price: 1999,
    image: "https://images.unsplash.com/photo-1506629905607-e48b0e67d879?w=500&auto=format&fit=crop&q=80",
    description: "Warm fleece lining",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Blue"],
    featured: false
  },
  {
    id: 3,
    name: "Sports Performance Track",
    price: 2299,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=500&auto=format&fit=crop&q=80",
    description: "Moisture-wicking fabric",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "Blue"],
    featured: true
  },
  {
    id: 4,
    name: "Cotton Blend Track Pants",
    price: 1699,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=80",
    description: "Soft cotton comfort",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Green", "Maroon"],
    featured: false
  },
  {
    id: 5,
    name: "Designer Logo Track",
    price: 2799,
    image: "https://images.unsplash.com/photo-1506629905607-e48b0e67d879?w=500&auto=format&fit=crop&q=80",
    description: "Branded designer track",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White"],
    featured: false
  },
  {
    id: 6,
    name: "Athleisure Track Pants",
    price: 1899,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=500&auto=format&fit=crop&q=80",
    description: "Street style athleisure",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Charcoal", "Burgundy"],
    featured: false
  }
];

export default function TrackPantsCollection() {
  return (
    <CollectionLayout
      title="Track Pants"
      description="Comfortable track pants for active lifestyle and casual wear. Perfect for workouts and lounging."
    >
      <ProductGrid products={trackPants} />
    </CollectionLayout>
  );
}