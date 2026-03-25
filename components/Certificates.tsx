'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { certificates, getCertificateUrl } from '@/lib/certificates';

export const Certificates: React.FC = () => {
  const displayCertificates = certificates.slice(0, 8);

  return (
    <section id="certificates" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-0 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35), transparent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-green-500">Certificates</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Certifications and credentials across multiple domains including AI, web development, and computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex flex-col h-full"
            >
              {/* Certificate Image/Preview Container */}
              <div className="relative mb-4 bg-linear-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden border border-white/10 group-hover:border-green-500/30 transition-all duration-300 flex-1 min-h-70">
                <div className="w-full h-full aspect-4/5 overflow-hidden flex items-center justify-center bg-black/40">
                  <iframe
                    src={`https://drive.google.com/file/d/${certificate.driveFileId}/preview`}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    style={{ 
                      border: 'none',
                      objectFit: 'cover',
                      minHeight: '280px'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Certificate Info */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-green-400 mb-1 line-clamp-2">
                  {certificate.title}
                </h3>
                <p className="text-sm text-white/60 mb-4 flex-1">{certificate.issuer}</p>

                {/* View Certificate Button */}
                <a
                  href={getCertificateUrl(certificate.driveFileId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                >
                  VIEW CERTIFICATE
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <Link
            href="/certificates"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
          >
            View All Certificates
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
