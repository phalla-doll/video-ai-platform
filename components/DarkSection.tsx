'use client';

import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';

export default function DarkSection() {
  return (
    <section className="bg-[#2A1B18] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-pink-300 backdrop-blur-sm">
              {'// About Us? //'}
            </span>
            <h2 className="mb-6 font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              Video AI is a shoppable video platform built for modern D2C brands.
            </h2>
            <p className="mb-8 text-lg text-white/60">
              We turn TikToks, Reels, and UGC into interactive storefronts—letting
              customers browse, select, and buy products directly inside videos on
              your site, app, or emails.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-gray-900 transition-transform hover:scale-105">
                Get Started — For Free!
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="relative"
          >
            <div className="flex flex-col items-end justify-center gap-8 text-right">
              <div>
                <h3 className="font-serif text-5xl font-light md:text-7xl">
                  8000+ Brands
                </h3>
                <p className="mt-4 max-w-md text-sm text-white/60">
                  With fast setup, deep Shopify integration, and AI-powered
                  optimization, ReelUp helps brands boost conversions, engagement.
                </p>
              </div>

              {/* Decorative Image Card */}
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent"></div>
                <Image
                  src="https://picsum.photos/400/400"
                  alt="Brand Example"
                  fill
                  className="object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/40 p-3 backdrop-blur-md">
                   <div className="h-2 w-1/2 rounded bg-white/50 mb-2"></div>
                   <div className="h-2 w-3/4 rounded bg-white/30"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
