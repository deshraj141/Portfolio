'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

export const Blog: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="blog" className="relative w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-green-500">Articles</span>
          </h2>
          <p className="text-white/60 text-lg">
            Insights and tutorials on web development, design, and technology
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
                }}
              />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-green-500/30 rounded-2xl p-6 h-full flex flex-col transition duration-300">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                    {post.category}
                  </span>
                  <span className="text-white/50 text-xs">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-sm mb-6 grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="pt-4 border-t border-white/10">
                  <time className="text-white/50 text-xs">{post.date}</time>
                </div>

                {/* Read More Link */}
                <Link href={`/blog/${post.id}`}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-4 flex items-center gap-2 text-green-400 font-semibold text-sm cursor-pointer hover:text-green-300 transition-colors duration-200 bg-none border-none p-0"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </motion.button>
                </Link>

                {/* Background accent */}
                <div className="absolute inset-0 rounded-2xl bg-green-500/0 group-hover:bg-green-500/5 transition duration-300 pointer-events-none" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition-all duration-300 cursor-pointer"
            >
              Explore All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
