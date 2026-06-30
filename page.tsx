import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Bogdan's Recovery Ltd | Vehicle Recovery Mansfield",
  description: '24/7 vehicle recovery, towing and breakdown assistance around Mansfield and surrounding areas. Call 07776 462219.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
