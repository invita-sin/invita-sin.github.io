"use client";

import { useState, useMemo } from "react";
import { Search, FilterX } from "lucide-react";
import templatesData from "@/data/templates.json";
import TemplateCard from "@/components/template-card";

const categories = [
  "Semua",
  "Modern",
  "Minimalist",
  "Elegant",
  "Floral",
  "Islamic",
  "Luxury",
  "Rustic",
  "Traditional",
];

export default function TemplateCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    return templatesData.filter((t) => {
      const matchSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "Semua" || t.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <section id="catalog" className="py-20 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-montserrat text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            Pilih Template
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">
            Katalog Template
          </h2>
          <p className="font-poppins text-gray-500 max-w-xl mx-auto">
            Tersedia berbagai tema untuk momen spesial Anda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari template..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="font-poppins w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-transparent transition-shadow"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-poppins shrink-0 text-sm px-4 py-2 rounded-lg transition-colors ${
                  category === cat
                    ? "bg-gold-400 text-gold-900 font-medium"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gold-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <FilterX className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="font-poppins text-gray-400">
              Tidak ada template yang cocok dengan pencarian Anda.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
