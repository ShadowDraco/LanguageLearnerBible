'use client';
import './globals.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LL Bible',
  description: 'An interactive bible app for language learners ',
};

const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#5500f2',
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={Theme}>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
