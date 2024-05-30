import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

interface FontFamilies {
  [key: string]: string;
}

const getFontFamily = (locale: string) => {
  // Define font families for each locale
  const fontFamilies: FontFamilies = {
    en: "'Roboto', sans-serif", // Font for English
    ar: "'Cairo', sans-serif" // Font for Arabic
  };
  // Return font family based on locale
  return fontFamilies[locale] || "'Roboto', sans-serif"; // Default to Roboto for unknown locales
};


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body style={{ fontFamily: getFontFamily(locale) }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}