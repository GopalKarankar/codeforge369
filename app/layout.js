import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const title = "Codeforge | Software Development Company";
const description = "Codeforge is a software development company building scalable web applications, AI-powered products, and modern digital experiences.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://codeforge.dev"),
  openGraph: {
    title,
    description,
    siteName: "Codeforge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
