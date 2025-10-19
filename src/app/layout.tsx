import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import Providers from '@/components/Providers';
import './globals.css';
import Header from '@/components/Header';

const montserratAlternates = Montserrat_Alternates({ 
    variable: "--font-montserrat-alternates",
    subsets: ["latin"], 
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "ProFile",
    description: "Intelligent Resume Evaluation and Job Matching System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserratAlternates.variable} antialiased h-32 bg-gray-50/30 dark:bg-[#0A1124] transition-colors duration-300 ease-in-out`}>
            <Providers>
                <Header />
                {/* <div className="h-16 opacity-0"></div> */}
                {children}
            </Providers>
      </body>
    </html>
  );
}
