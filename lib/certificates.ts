export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  fileName: string;
  driveFileId: string;
  preview: string;
  featured?: boolean;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Bits and Bytes',
    issuer: 'Online Certification',
    fileName: 'bits and bites.pdf',
    driveFileId: '10DFxCq300vvE_8rtFE18TvSuqb94d45S',
    preview: 'https://drive.google.com/thumbnail?id=10DFxCq300vvE_8rtFE18TvSuqb94d45S&sz=w400',
  },
  {
    id: 2,
    title: 'Build Generative AI Apps with No-Code Tools',
    issuer: 'Coursera',
    fileName: 'Build Generative AI Apps and Solutions with No-Code Tools.pdf',
    driveFileId: '1jsAoHz4oJAdHCLfmvAQyHKtqM_fI3cQb',
    preview: 'https://drive.google.com/thumbnail?id=1jsAoHz4oJAdHCLfmvAQyHKtqM_fI3cQb&sz=w400',
    featured: true,
  },
  {
    id: 3,
    title: 'C++ Fundamentals',
    issuer: 'Academic',
    fileName: 'c++.pdf',
    driveFileId: '1aDe8yKkWgxOy9sc-9O74yHicpvPL6Xvv',
    preview: 'https://drive.google.com/thumbnail?id=1aDe8yKkWgxOy9sc-9O74yHicpvPL6Xvv&sz=w400',
  },
  {
    id: 4,
    title: 'ChatGPT-4 Prompt Engineering',
    issuer: 'Online Certification',
    fileName: 'ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf',
    driveFileId: '1a9iVM18JWDC4sXbLYwHS8Gz9G4fE8m9H',
    preview: 'https://drive.google.com/thumbnail?id=1a9iVM18JWDC4sXbLYwHS8Gz9G4fE8m9H&sz=w400',
    featured: true,
  },
  {
    id: 5,
    title: 'Computational Theory and Automata',
    issuer: 'Academic',
    fileName: 'Computational Theory Language Principle & Finite Automata Theory.pdf',
    driveFileId: '1yT-dzsYkGDCVD1NZwOv52aA8ScDGl2Xg',
    preview: 'https://drive.google.com/thumbnail?id=1yT-dzsYkGDCVD1NZwOv52aA8ScDGl2Xg&sz=w400',
  },
  {
    id: 6,
    title: 'Digital Systems',
    issuer: 'Academic',
    fileName: 'DIGITAL SYSTEM.pdf',
    driveFileId: '1lMnqZkXo7bZ7EdieSNgntoezVjpYbi3j',
    preview: 'https://drive.google.com/thumbnail?id=1lMnqZkXo7bZ7EdieSNgntoezVjpYbi3j&sz=w400',
  },
  {
    id: 7,
    title: 'Computer Networks Fundamentals',
    issuer: 'Academic',
    fileName: 'fundamental of network communication.pdf',
    driveFileId: '1xU48Vzu1vPkQQ7isvrTeFJ0FRDyfV46e',
    preview: 'https://drive.google.com/thumbnail?id=1xU48Vzu1vPkQQ7isvrTeFJ0FRDyfV46e&sz=w400',
  },
  {
    id: 8,
    title: 'Generative AI Fundamentals',
    issuer: 'Online Certification',
    fileName: 'GenerativeAI.pdf',
    driveFileId: '1GFWcKbCRgOy5wU6cmSBSpPlTBxh1t_nk',
    preview: 'https://drive.google.com/thumbnail?id=1GFWcKbCRgOy5wU6cmSBSpPlTBxh1t_nk&sz=w400',
  },
  {
    id: 9,
    title: 'Intro to Hardware and OS',
    issuer: 'Academic',
    fileName: 'INTRO TO HARDWARE&OS.pdf',
    driveFileId: '1RTB9Xr3Z1bXLoqvfjeWwFqJXmY5qzf1g',
    preview: 'https://drive.google.com/thumbnail?id=1RTB9Xr3Z1bXLoqvfjeWwFqJXmY5qzf1g&sz=w400',
  },
  {
    id: 10,
    title: 'Laravel Web Development',
    issuer: 'Udemy',
    fileName: 'laravel-udemy.pdf',
    driveFileId: '1n2x19AAviMIXzRgTSyCD60wvos8CvzOm',
    preview: 'https://drive.google.com/thumbnail?id=1n2x19AAviMIXzRgTSyCD60wvos8CvzOm&sz=w400',
    featured: true,
  },
  {
    id: 11,
    title: 'Master Generative AI Tools',
    issuer: 'Udemy',
    fileName: 'Master Generative AI & Generative AI tools (ChatGPT & more).pdf',
    driveFileId: '1rSE11dw3bPy3MBJDTfWrBfaI79sFZpOd',
    preview: 'https://drive.google.com/thumbnail?id=1rSE11dw3bPy3MBJDTfWrBfaI79sFZpOd&sz=w400',
    featured: true,
  },
  {
    id: 12,
    title: 'Peer-to-Peer Protocols',
    issuer: 'Academic',
    fileName: 'peer to peer protocols.pdf',
    driveFileId: '1tF29djJ4_SgYTQ2jtPFA5Qea1tXlXGY0',
    preview: 'https://drive.google.com/thumbnail?id=1tF29djJ4_SgYTQ2jtPFA5Qea1tXlXGY0&sz=w400',
  },
  {
    id: 13,
    title: 'Social Networks',
    issuer: 'Academic',
    fileName: 'Social Networks.pdf',
    driveFileId: '1VgT1TAqzWxGKp0DIkRV1AfF5_tWkmzJf',
    preview: 'https://drive.google.com/thumbnail?id=1VgT1TAqzWxGKp0DIkRV1AfF5_tWkmzJf&sz=w400',
  },
  {
    id: 14,
    title: 'TCP/IP Networking',
    issuer: 'Academic',
    fileName: 'TCPIP.pdf',
    driveFileId: '11NrP2SratDfoT9ZLzSyK_JkBI5dS5oRY',
    preview: 'https://drive.google.com/thumbnail?id=11NrP2SratDfoT9ZLzSyK_JkBI5dS5oRY&sz=w400',
  },
];

export const featuredCertificates = certificates.filter((certificate) => certificate.featured);

export const getCertificateUrl = (driveFileId: string) => {
  return `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`;
};

export const getCertificatePreviewUrl = (driveFileId: string) => {
  return `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w400`;
};
