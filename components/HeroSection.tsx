'use client';

import {motion} from 'motion/react';
import {BarChart3, Heart, ShoppingBag, Star, TrendingUp} from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="mx-auto max-w-4xl font-serif text-5xl font-medium leading-tight text-gray-900 md:text-7xl lg:text-8xl"
        >
          Boost conversions instantly
          <br />
          <span className="italic text-gray-500">AI Driven 4x</span>
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
        >
          From concept to conversion — manage thousands of successful influencers
          ads seamlessly.
        </motion.p>

        {/* Central Visual */}
        <div className="relative mx-auto mt-16 flex max-w-5xl items-center justify-center">
          {/* Floating Widget Left: Engagement Stats */}
          <motion.div
            initial={{x: -50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.4}}
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-2xl bg-[#FFF8E7] p-6 shadow-xl lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-500">Engagement</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">40%</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-2 rounded-full bg-yellow-400/30"
                  style={{height: `${Math.random() * 100}%`}}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Widget Right: Product Sales */}
          <motion.div
            initial={{x: 50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.6}}
            className="absolute right-10 top-1/3 z-10 hidden -translate-y-1/2 transform rounded-2xl bg-[#FFEEE5] p-4 shadow-xl lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                <span className="text-lg font-bold">8</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">items</p>
                <p className="text-xs text-gray-500">Sold this week</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-gray-900 shadow-sm">
                $12
              </span>
              <div className="relative h-12 w-8 overflow-hidden rounded bg-gray-200">
                <Image
                  src="https://picsum.photos/100/200"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Widget Bottom Right: User Interaction */}
          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.8}}
            className="absolute bottom-10 right-20 z-10 hidden transform rounded-2xl bg-white p-3 shadow-xl lg:block"
          >
            <div className="relative h-16 w-24 overflow-hidden rounded-lg">
              <Image
                src="https://picsum.photos/200/150"
                alt="User"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-1 right-1 rounded-full bg-white p-1 shadow-sm">
                <Heart className="h-3 w-3 fill-red-500 text-red-500" />
              </div>
              <div className="absolute bottom-1 left-1 rounded bg-black/50 px-1 py-0.5 text-[10px] text-white">
                1.5k
              </div>
            </div>
            <div className="mt-2 flex justify-between px-1">
              <Heart className="h-4 w-4 text-gray-400" />
              <ShoppingBag className="h-4 w-4 text-gray-400" />
            </div>
          </motion.div>

          {/* Floating Widget Left Bottom: Review */}
          <motion.div
            initial={{x: -30, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.7}}
            className="absolute bottom-20 left-20 z-10 hidden transform rounded-xl bg-white p-3 shadow-lg lg:block"
          >
            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
          </motion.div>

          {/* Central Phone Mockup */}
          <div className="relative z-0 mx-auto h-[600px] w-[300px] overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-black shadow-2xl">
            <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-gray-900"></div>
            <Image
              src="https://picsum.photos/600/1200"
              alt="App Screen"
              fill
              className="object-cover opacity-90"
            />
            
            {/* Overlay UI on Phone */}
            <div className="absolute bottom-8 left-4 right-4 rounded-xl bg-white/90 p-3 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="https://picsum.photos/100/100"
                    alt="Avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Wade Warren</p>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs text-red-500 font-medium">Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Tag on Phone */}
            <div className="absolute left-4 top-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
              <div className="h-8 w-8 overflow-hidden rounded bg-gray-100">
                 <Image src="https://picsum.photos/80/80" alt="Product" width={32} height={32} className="object-cover" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-gray-900">2.01</p>
                <p className="text-gray-500">Serum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
