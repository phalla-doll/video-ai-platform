'use client';

import {motion} from 'motion/react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Testimonial Card */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-sm transition-shadow hover:shadow-xl lg:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-32">
                <Image
                  src="https://picsum.photos/200/200"
                  alt="Testimonial User"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-xl font-medium leading-relaxed text-gray-900 md:text-2xl">
                  “Great App! Great customer service! Prompt replies and help to
                  customize the fonts and other things in the App Widgets. Thank
                  you!”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src="https://picsum.photos/100/100"
                      alt="Avatar"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Jamie</p>
                    <p className="text-sm text-gray-500">Roverlund founder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revenue Stat Card */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="flex flex-col justify-center rounded-[32px] bg-[#F9F9F9] p-8 lg:p-12"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gray-400">
              ReelUp Revenue
            </p>
            <h3 className="font-serif text-6xl font-medium text-gray-900 md:text-8xl">
              $140.1K
            </h3>
            <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <motion.div
                initial={{width: 0}}
                whileInView={{width: '85%'}}
                transition={{duration: 1.5, ease: 'easeOut'}}
                className="h-full bg-green-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
