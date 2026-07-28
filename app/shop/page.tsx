"use client";
import React, { useState } from 'react';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { imgPath } from '@/lib/imgPath';

const products = [
  {
    id: 1,
    name: "Home Kit 2025/26",
    category: "Jerseys",
    price: 85000,
    badge: "Best Seller",
    badgeColor: "bg-accent-gold text-black",
    image: imgPath("/images/lineup.jpg"),
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The official Blacks Power FC home kit worn by the 2025/26 FUFA Big League Champions.",
    rating: 5,
    reviews: 42,
  },
  {
    id: 2,
    name: "Away Kit 2025/26",
    category: "Jerseys",
    price: 85000,
    badge: "New",
    badgeColor: "bg-brand-red text-white",
    image: "https://placehold.co/400x500/1A1A1A/FFFFFF?text=Away+Kit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The official away kit for the Uganda Premier League season.",
    rating: 4,
    reviews: 18,
  },
  {
    id: 3,
    name: "Champions Hoodie",
    category: "Tops",
    price: 65000,
    badge: "Champions Edition",
    badgeColor: "bg-accent-gold text-black",
    image: "https://placehold.co/400x500/D21022/FFFFFF?text=Hoodie",
    sizes: ["S", "M", "L", "XL"],
    description: "Celebrate the FUFA Big League title with this limited-edition champions hoodie.",
    rating: 5,
    reviews: 27,
  },
  {
    id: 4,
    name: "Training Jersey",
    category: "Jerseys",
    price: 55000,
    image: "https://placehold.co/400x500/0A0A0A/FFFFFF?text=Training+Jersey",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Lightweight training jersey worn by the squad in daily sessions.",
    rating: 4,
    reviews: 11,
  },
  {
    id: 5,
    name: "Club Cap",
    category: "Accessories",
    price: 25000,
    badge: "Popular",
    badgeColor: "bg-green-600 text-white",
    image: "https://placehold.co/400x500/1A1A1A/D21022?text=Club+Cap",
    sizes: ["One Size"],
    description: "Adjustable snapback cap with the Blacks Power FC crest.",
    rating: 4,
    reviews: 34,
  },
  {
    id: 6,
    name: "Scarf",
    category: "Accessories",
    price: 18000,
    image: "https://placehold.co/400x500/D21022/FFFFFF?text=Scarf",
    sizes: ["One Size"],
    description: "Classic woven scarf in club colours. Show your support on matchday.",
    rating: 5,
    reviews: 56,
  },
  {
    id: 7,
    name: "Training Shorts",
    category: "Bottoms",
    price: 35000,
    image: "https://placehold.co/400x500/0A0A0A/FFFFFF?text=Shorts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Lightweight training shorts with Blacks Power FC branding.",
    rating: 4,
    reviews: 9,
  },
  {
    id: 8,
    name: "Champions Mug",
    category: "Accessories",
    price: 15000,
    badge: "New",
    badgeColor: "bg-brand-red text-white",
    image: "https://placehold.co/400x500/1A1A1A/FFD700?text=Mug",
    sizes: ["One Size"],
    description: "Ceramic mug celebrating the 2025/26 FUFA Big League title.",
    rating: 5,
    reviews: 22,
  },
];

const categories = ["All", "Jerseys", "Tops", "Bottoms", "Accessories"];

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-brand-gray rounded-2xl border border-gray-800 hover:border-brand-red/40 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-black font-heading tracking-wider uppercase px-2.5 py-1 rounded-sm ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-brand-red font-heading uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-heading font-bold text-lg uppercase leading-tight mb-1">{product.name}</h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} className={i < product.rating ? "text-accent-gold fill-accent-gold" : "text-gray-700 fill-gray-700"} />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <p className="text-gray-400 text-xs line-clamp-2 mb-4">{product.description}</p>

        {/* Size selector */}
        {product.sizes.length > 1 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-xs font-heading font-bold uppercase rounded border transition-colors ${
                    selectedSize === size
                      ? 'bg-brand-red border-brand-red text-white'
                      : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="font-heading font-black text-xl text-white">
            UGX {product.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
              added
                ? 'bg-green-600 text-white scale-95'
                : 'bg-brand-red hover:bg-red-700 text-white'
            }`}
          >
            <ShoppingCart size={15} />
            {added ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = products
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <div className="relative bg-brand-gray border-b border-brand-red pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgPath("/logo.png")} alt="" className="w-96 h-96 absolute -right-20 -top-10 object-contain" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-brand-red font-heading tracking-widest uppercase text-sm mb-2">Official Merchandise</p>
          <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
            Warriors <span className="text-brand-red">Shop</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl">
            Gear up in official Blacks Power FC merchandise. Champions Edition items available for a limited time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={14} className="text-gray-500 shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white'
                    : 'bg-brand-gray text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-brand-gray border border-gray-700 text-gray-300 text-xs font-heading uppercase tracking-wider rounded px-3 py-2 focus:outline-none focus:border-brand-red"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Results count */}
        <p className="text-gray-600 text-xs uppercase font-heading tracking-wider mb-6">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 bg-brand-red rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-black text-3xl uppercase tracking-tight text-white">Custom Jerseys for Your Club?</h2>
            <p className="text-red-200 mt-2 text-sm">Contact us for bulk orders, personalisation, and club deals.</p>
          </div>
          <Button className="bg-white text-brand-red hover:bg-gray-100 font-heading font-black uppercase tracking-widest shrink-0 px-8 py-3">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
