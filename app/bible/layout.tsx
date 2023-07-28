import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bible',
  description: 'Search the bible and get reading',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
