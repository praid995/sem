import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { HeaderWrapper } from '@/components/ui/header-wrapper';
import { schemaSurodini } from '@/lib/schema';
import { SiteBackgroundCircles } from '@/components/ui/site-background-circles';

export const metadata: Metadata = {
  title: "Семён Суродин | Ведущий мероприятий",
  description: "Профессиональный ведущий мероприятий.",
  metadataBase: new URL("https://surodin-event.ru"),
  openGraph: {
    title: "Семён Суродин | Ведущий мероприятий",
    description: "Семён Суродин — ведущий мероприятий.",
    url: "https://surodin-event.ru",
    siteName: "Семён Суродин | Ведущий мероприятий",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Семён Суродин — ведущий мероприятий",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSurodini) }}
        />
      </head>
      <body className="font-body text-foreground relative min-h-screen">
        {/* SVG-узор с кругами на белом фоне */}
        <SiteBackgroundCircles />
        
        <div className="relative z-10 flex min-h-screen flex-col bg-transparent">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <HeaderWrapper />
            <main className="flex-1 pt-16">{children}</main>
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
