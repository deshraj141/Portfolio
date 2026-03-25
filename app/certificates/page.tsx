import Link from 'next/link';
import { certificates, getCertificateUrl } from '@/lib/certificates';

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-green-400 text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Portfolio Archive</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            All <span className="text-green-500">Certificates</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Complete collection of certifications and academic credentials across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/#certificates"
            className="inline-flex items-center px-8 py-3 rounded-lg border border-white/20 text-white hover:border-green-500/50 hover:text-green-500 transition-colors duration-300 font-semibold"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
