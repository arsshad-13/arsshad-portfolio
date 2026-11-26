import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arsshad M. | Software Engineer & Full-Stack Developer',
  description: 'Portfolio of Arsshad M — software engineering, full-stack development, AI/ML projects, research, and experience.',
  keywords: ['Arsshad M', 'Software Engineer', 'Full-Stack Developer', 'AI', 'Machine Learning', 'Portfolio', 'Next.js', 'FastAPI'],
  authors: [{ name: 'Arsshad M', url: 'https://www.linkedin.com/in/arsshad-maheswaran-79a612300' }],
  creator: 'Arsshad M',
  openGraph: {
    title: 'Arsshad M. | Software Engineer & Full-Stack Developer',
    description: 'Explore Arsshad M’s software engineering, full-stack, AI/ML projects, experience, and research.',
    type: 'website',
    images: [{ url: '/images/profile.jpg', width: 800, height: 800, alt: 'Arsshad M' }],
  },
  twitter: { card: 'summary_large_image', title: 'Arsshad M. | Portfolio', description: 'Software engineering, full-stack development, and AI/ML projects.', images: ['/images/profile.jpg'] },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
