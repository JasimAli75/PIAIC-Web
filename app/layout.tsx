'use client';

import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/Components/Header/Header';

export const metadata = {
  title: ' SaveMart',
  description: 'SaveMart Buy online any thing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
          {/* <Header/> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
