'use client';

import React, { useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';

const appleCurve = cubicBezier(0.34, 1.56, 0.64, 1);

const contactMethods = [
  {
    id: 'email',
    icon: '✉️',
    label: 'Email',
    value: 'deshrajsoni141@gmail.com',
    href: 'mailto:deshrajsoni141@gmail.com',
    color: 'from-blue-600 to-blue-900',
    bgOverlay: 'from-blue-500/20 via-blue-400/10 to-transparent',
  },
  {
    id: 'phone',
    icon: '📱',
    label: 'Phone',
    value: '+91 8626897314',
    href: 'tel:+918626897314',
    color: 'from-green-600 to-green-900',
    bgOverlay: 'from-green-500/20 via-green-400/10 to-transparent',
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Location',
    value: 'India',
    href: '#',
    color: 'from-red-600 to-red-900',
    bgOverlay: 'from-red-500/20 via-red-400/10 to-transparent',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/deshraj-soni-22b282295/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.737h3.554v1.378c.43-.663 1.198-1.6 2.915-1.6 2.128 0 3.724 1.39 3.724 4.38v5.579zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.96-1.704 1.188 0 1.915.753 1.94 1.704 0 .946-.752 1.704-1.985 1.704zm1.946 11.597H3.392V9.671h3.891v10.781zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/deshraj141',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'from-gray-700 to-gray-900',
  },
];

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

// Using inline variants with appleCurve instead of importing

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:deshrajsoni141@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/FinalRes.pdf';
    link.download = 'Deshraj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4), transparent)',
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let&apos;s <span className="text-green-500">Connect</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have an exciting project or opportunity? I&apos;d love to hear from you. Let&apos;s discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-1 space-y-4"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.id}
                href={method.href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: appleCurve },
                  },
                }}
                onMouseEnter={() => setHoveredMethod(method.id)}
                onMouseLeave={() => setHoveredMethod(null)}
                className="group relative overflow-hidden rounded-xl cursor-pointer block"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />

                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-md bg-white/5 border border-white/10 group-hover:border-green-500/30 rounded-xl p-6 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className="text-3xl mb-3"
                    animate={hoveredMethod === method.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {method.icon}
                  </motion.div>

                  {/* Label and Value */}
                  <p className="text-white/50 text-xs font-semibold mb-1">{method.label}</p>
                  <p className={`font-semibold transition-colors duration-300 ${
                    hoveredMethod === method.id ? 'text-green-400' : 'text-white'
                  }`}>
                    {method.value}
                  </p>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, rgba(34, 197, 94, 0.2), transparent)`,
                      filter: 'blur(20px)',
                    }}
                  />
                </div>
              </motion.a>
            ))}

            {/* Availability Status */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: appleCurve },
                },
              }}
              className="relative overflow-hidden rounded-xl mt-8"
            >
              <div className="absolute inset-0 bg-linear-to-br from-green-600 to-green-900 opacity-5" />
              <div className="relative backdrop-blur-md bg-white/5 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-500"
                  />
                  <span className="text-white font-semibold">Available for Work</span>
                </div>
                <p className="text-white/60 text-sm">
                  Open to freelance projects and full-time opportunities. Let&apos;s build something incredible!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <label className="text-white/70 text-sm font-semibold mb-2 block">Name</label>
              <motion.input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-full px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 focus:border-green-500/50 rounded-lg text-white placeholder-white/30 focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <label className="text-white/70 text-sm font-semibold mb-2 block">Email</label>
              <motion.input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-full px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 focus:border-green-500/50 rounded-lg text-white placeholder-white/30 focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <label className="text-white/70 text-sm font-semibold mb-2 block">Message</label>
              <motion.textarea
                name="message"
                placeholder="Tell me about your project, vision, or anything else you'd like to discuss..."
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-full px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 focus:border-green-500/50 rounded-lg text-white placeholder-white/30 focus:outline-none transition-colors duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                type="submit"
                className="w-full py-3 px-6 bg-linear-to-r from-green-500 to-emerald-500 text-black font-semibold rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{submitted ? '✓' : '📤'}</span>
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.div>

            {/* Resume Download */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              type="button"
              className="w-full py-3 px-6 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📥</span>
              Download Resume
            </motion.button>
          </motion.form>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-12 border-t border-white/10"
        >
          <p className="text-white/60 mb-6">Connect with me on social media</p>
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${social.color} p-0.5 group`}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)`,
                    filter: 'blur(15px)',
                  }}
                />

                {/* Icon Container */}
                <div className="relative w-full h-full rounded-xl bg-black flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -40 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-green-500 text-black px-3 py-1 rounded-lg text-xs font-semibold pointer-events-none"
                >
                  {social.name}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
