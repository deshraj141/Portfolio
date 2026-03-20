'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/lib/blogPosts';

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Article not found</h1>
          <p className="text-white/60 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/#blog">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition-all duration-300"
            >
              Back to Blog
            </motion.span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
        }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent)',
        }} />
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-20 pb-8"
      >
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/#blog" className="w-fit block">
            <motion.span
              whileHover={{ x: -8 }}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
            >
              <span>←</span>
              <span>Back to Articles</span>
            </motion.span>
          </Link>
        </div>
      </motion.div>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
              {post.category}
            </span>
            <time>{post.date}</time>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-black font-bold text-lg">
              DS
            </div>
            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <p className="text-white/50 text-sm">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-white/80 leading-relaxed">
              {post.content.split('\n\n').map((paragraph, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="whitespace-pre-wrap"
                >
                  {paragraph.startsWith('#') ? (
                    paragraph.startsWith('##') ? (
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace(/^#+\s*/, '')}
                      </h2>
                    ) : (
                      <h1 className="text-4xl font-bold text-white mt-12 mb-6">
                        {paragraph.replace(/^#+\s*/, '')}
                      </h1>
                    )
                  ) : paragraph.includes('```') ? (
                    <pre className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto my-6">
                      <code className="text-green-400 font-mono text-sm">
                        {paragraph.replace(/```/g, '')}
                      </code>
                    </pre>
                  ) : paragraph.startsWith('-') ? (
                    <ul className="list-disc list-inside space-y-2 my-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-white/80">{item.replace(/^-\s*/, '')}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-lg text-white/70 my-6 leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Related Articles Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">More Articles</h2>
          
          <div className="grid gap-6">
            {blogPosts
              .filter(p => p.id !== postId)
              .slice(0, 3)
              .map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  whileHover={{ x: 8 }}
                  className="p-6 border border-white/10 rounded-lg hover:border-green-500/30 transition-all duration-300 cursor-pointer"
                >
                  <Link href={`/blog/${relatedPost.id}`}>
                    <motion.div className="block">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-sm text-green-400">{relatedPost.category}</span>
                        <span className="text-xs text-white/50">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white hover:text-green-400 transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-white/60 text-sm">{relatedPost.excerpt}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/#blog">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3 bg-green-500/10 text-green-400 font-semibold rounded-full border border-green-500/30 hover:bg-green-500/20 transition-all duration-300"
              >
                View All Articles
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
