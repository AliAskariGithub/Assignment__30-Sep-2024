import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <title>Student ID Card</title>
      <body className="min-h-screen bg-stone-200 pt-2 h-[95rem] font-poppins">
        {children}
      </body>
    </html>
  );
}
