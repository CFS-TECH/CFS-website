import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  HeaderSection,
  FooterSection,
} from "@/components/Layout/PublicLayoutElements";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // optional: avoids invisible text while loading
  variable: "--font-poppins", // optional: for use with CSS variables/Tailwind
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify all weights you need
});

export const metadata = {
  metadataBase: new URL("https://crossoverfintech.com"),

  title: {
    default: "Crossover Fintech Support | Professional Business Support",
    template: "%s | Crossover Fintech Support",
  },

  description:
    "Crossover Fintech Support provides professional BPO, Finance & Accounting, IT-Enabled Services, Website Development, Digital Marketing, and Corporate Travel Support for growing businesses worldwide.",

  keywords: [
    "Top tech company in Noida",
    "BPO services",
    "Fintech support",
    "Finance and accounting outsourcing",
    "IT enabled services",
    "CRM management",
    "Website development",
    "Digital marketing services",
    "Lead generation",
    "Corporate travel support",
    "Business outsourcing company",
    "Custom Software Development",
    "Financial Solutions",
    "Bulk Hiring Services",
  ],

  authors: [{ name: "Crossover Fintech Support" }],
  creator: "Crossover Fintech Support",
  publisher: "Crossover Fintech Support",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  openGraph: {
    title:
      "Crossover Fintech Support | Professional Business Support Solutions",
    description:
      "Expert BPO, Finance, ITES, Website Development & Digital Marketing services tailored for fintech, startups, and enterprises.",
    url: "https://crossoverfintech.com",
    siteName: "Crossover Fintech Support",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crossover Fintech Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Crossover Fintech Support | BPO, ITES & Digital Solutions",
    description:
      "Outsource smarter with Crossover Fintech Support – BPO, Finance, IT, and Growth Services for modern businesses.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://crossoverfintech.com",
  },

  category: "Business Services",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Crossover Fintech Support",
    url: "https://crossoverfintech.com",
    logo: "https://crossoverfintech.com/og-image.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-99907-82525",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61587398464233",
      "https://www.instagram.com/crossoverfintech/",
      "https://x.com/CFintech93318",
      "https://www.linkedin.com/in/crossover-fintech-9a15b73b6/",
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} `} suppressHydrationWarning={true}>
      <head suppressHydrationWarning={true}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V46RTWFLPB"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V46RTWFLPB');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const observer = new MutationObserver((mutations) => {
                  for (const mutation of mutations) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
                      mutation.target.removeAttribute('bis_skin_checked');
                    }
                    mutation.addedNodes.forEach(node => {
                      if (node.nodeType === 1 && node.hasAttribute('bis_skin_checked')) {
                        node.removeAttribute('bis_skin_checked');
                      }
                      if (node.querySelectorAll) {
                        node.querySelectorAll('[bis_skin_checked]').forEach(el => el.removeAttribute('bis_skin_checked'));
                      }
                    });
                  }
                });
                observer.observe(document.documentElement, {
                  attributes: true,
                  childList: true,
                  subtree: true,
                  attributeFilter: ['bis_skin_checked']
                });
              })();
            `,
          }}
        />
      </head>
      <body className="bg-gray-50 text-[#102A43]" suppressHydrationWarning={true}>
        <HeaderSection />
        {children}
        <FooterSection />
        <SpeedInsights />
      </body>
    </html>
  );
}
