/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  inventory: number;
  featured: boolean;
  active: boolean;
}

const categoryTitles: { [key: string]: { title: string; description: string } } = {
  'formal-shirts': {
    title: 'Formal Shirts',
    description: 'Premium dress shirts crafted for the modern professional. Perfect fit, superior comfort, and timeless style for business and formal occasions.'
  },
  't-shirts': {
    title: 'Casual T-Shirts',
    description: 'Comfortable and stylish everyday tees. Perfect for casual outings and relaxed days. Premium fabrics and modern fits.'
  },
  'formal-pants': {
    title: 'Formal Pants',
    description: 'Tailored trousers for business and special occasions. Perfect fit guaranteed with premium fabrics and expert craftsmanship.'
  },
  'casual-pants': {
    title: 'Casual Pants',
    description: 'Relaxed fit pants for weekend wear and casual outings. Comfort meets style with premium fabrics and modern designs.'
  },
  'track-pants': {
    title: 'Track Pants',
    description: 'Comfortable track pants for active lifestyle and casual wear. Perfect for workouts, lounging, and everyday comfort with modern designs.'
  },
  'accessories': {
    title: 'Accessories',
    description: 'Complete your look with our premium accessories. From belts to ties, find the perfect finishing touch.'
  }
};

export default function DynamicCollectionPage() {
  const params = useParams();
  const category = params.category as string;
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      fetchProducts();
    }
  }, [category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/products?category=${category}`);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      } else {
        setError(`Failed to fetch ${categoryTitles[category]?.title || category}`);
      }
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
      setError(`Error loading ${categoryTitles[category]?.title || category}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Collection</h3>
          <p className="text-gray-500 mb-4">{error}</p>
          <button 
            onClick={fetchProducts}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const categoryInfo = categoryTitles[category] || {
    title: category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Explore our collection of ${category.split('-').join(' ')}. Premium quality and modern designs.`
  };

  return (
    <CollectionLayout
      title={categoryInfo.title}
      description={categoryInfo.description}
    >
      <ProductGrid products={products} />
    </CollectionLayout>
  );
}