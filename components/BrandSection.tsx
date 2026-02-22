'use client';

import Image from 'next/image';
import {motion} from 'motion/react';

const brands = [
  'Nike',
  'Adidas',
  'Puma',
  'Reebok',
  'Under Armour',
  'New Balance',
];

export default function BrandSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
          Brands that backed us
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              viewport={{once: true}}
              className="text-2xl font-bold text-gray-300 grayscale transition-all hover:text-gray-900 hover:grayscale-0"
            >
              {/* Using text for logos for simplicity, but could be images */}
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
