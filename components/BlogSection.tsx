'use client';

import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Why We Love Webflow (And You Should, Too!)',
    date: 'Sep 25, 2023',
    readTime: '3 min read',
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: 2,
    title: "The Worst Advice We've Ever Heard About Web Design",
    date: 'Sep 25, 2023',
    readTime: '3 min read',
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: 3,
    title: '5 Principles Of Effective Web Design',
    date: 'Sep 25, 2023',
    readTime: '3 min read',
    image: 'https://picsum.photos/600/400?random=3',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-serif text-4xl text-gray-900 md:text-5xl">
            The latest from our blog
          </h2>
          <button className="hidden rounded-full border border-gray-200 px-6 py-2 text-sm font-medium transition-colors hover:bg-gray-50 md:block">
            Our Blogs
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              viewport={{once: true}}
              className="group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="mb-4 text-xl font-medium leading-snug text-gray-900 group-hover:underline md:text-2xl">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                Read Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="rounded-full bg-black px-8 py-3 text-white">
            See All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
