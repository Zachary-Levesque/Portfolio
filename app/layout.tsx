import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PageLinks } from "@/components/page-links";
import { ViewTransitionProvider } from "@/components/view-transition-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zacharylevesque.site"),
  title: "Zachary Levesque | Portfolio",
  description:
    "Electrical Engineering and Physics student building systems across machine learning infrastructure, hardware engineering, embedded systems, quantitative research, and simulation.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Zachary Levesque | Portfolio",
    description:
      "Machine learning infrastructure, hardware engineering, embedded systems, quantitative research, and simulation.",
    url: "https://www.zacharylevesque.site",
    siteName: "Zachary Levesque",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zachary Levesque portfolio preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Levesque | Portfolio",
    description:
      "Machine learning infrastructure, hardware engineering, embedded systems, quantitative research, and simulation.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ViewTransitionProvider>
          <div className="flex min-h-screen flex-col pt-[77px] md:pt-[65px]">
            <Nav />
            <main className="page-content mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
              {children}
              <PageLinks />
            </main>
            <Footer />
          </div>
        </ViewTransitionProvider>
      </body>
    </html>
  );
}
