'use client';

import {motion} from 'motion/react';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <span className="font-serif text-lg font-bold">R</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">
            ReelUp
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Blog
          </a>
          <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          className="absolute left-0 right-0 top-full border-b bg-white p-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-gray-900">
              Features
            </a>
            <a href="#" className="text-lg font-medium text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-lg font-medium text-gray-900">
              Blog
            </a>
            <button className="w-full rounded-full bg-black py-3 text-white">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
