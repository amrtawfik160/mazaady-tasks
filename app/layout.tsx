import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const viewport = {
  themeColor: '#ffff',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'Mazaady',
  description:
    'Sell and buy anything with Mazaady platform electronic, old coins, cars, clothes, collectibles, and more the world&#039;s online marketplace with international shipping.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
