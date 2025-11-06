import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CosmicBadge from '@/components/CosmicBadge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Music Showcase | Red Ropes Production',
  description: 'Explore AI-generated music tracks created with cutting-edge AI models like Suno AI and Udio. Discover ambient, electronic, and lo-fi hip hop genres.',
  keywords: ['AI music', 'Suno AI', 'Udio', 'music generation', 'artificial intelligence', 'electronic music', 'ambient', 'lo-fi'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="/dashboard-console-capture.js" />
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}