import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site-config";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "software development",
    "web development",
    "AI products",
    "custom software",
    "Next.js development",
    "React development",
    "full-stack development",
    "digital products",
  ],
  authors: [{ name: "Codeforge" }],
  creator: "Codeforge",
  publisher: "Codeforge",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=S-V_dqFVWADv6YXrvGOPICva-SZLH_N8FEWVl_dqhRg", // Add your Google verification code here
    other: {
      "msvalidate.01": "29F18CA04E6A7717FF44B19D76228F13", // Add Bing verification code here
    },
  },

  
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/codeforge-high-resolution-logo.png`,
              description: SITE_DESCRIPTION,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9284840689",
                contactType: "customer service",
                email: "codeforge369@gmail.com",
              },
              sameAs: ["https://instagram.com/codeforge369"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
