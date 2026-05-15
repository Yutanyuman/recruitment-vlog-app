import '@/app/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Recruitment Vlog App',
  description: 'A prototype recruitment Vlog application with mock data'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}