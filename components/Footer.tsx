'use client';

import {motion} from 'motion/react';
import {Facebook, Instagram, Linkedin, Twitter} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <span className="font-serif text-lg font-bold">R</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                ReelUp
              </span>
            </div>
            <p className="text-sm text-gray-400">
              The leading shoppable video platform for modern commerce.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-500">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-500">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-500">
              Social
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} ReelUp Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
