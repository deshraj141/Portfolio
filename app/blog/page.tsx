'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

export default function BlogList() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
        }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent)',
        }} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Link
            href="/#blog"
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold mx-auto w-fit"
          >
            <motion.span whileHover={{ x: -8 }} className="flex items-center gap-2">
              <span>←</span>
              <span>Back Home</span>
            </motion.span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold">
            All <span className="text-green-500">Articles</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore my latest insights and tutorials on web development, design, and technology.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 text-sm">
              {blogPosts.length} Articles
            </span>
          </div>
        </div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 py-16"
      >
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ x: 12 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <motion.div className="block p-8 border border-white/10 rounded-2xl hover:border-green-500/50 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                        {post.category}
                      </span>
                      <time className="text-white/50 text-sm">{post.date}</time>
                      <span className="text-white/50 text-sm">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/60 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-green-400 font-semibold pt-4 group-hover:gap-4 transition-all">
                      <span>Read Article</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
