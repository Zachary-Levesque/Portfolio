import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PageLinks } from "@/components/page-links";
import { ViewTransitionProvider } from "@/components/view-transition-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zacharylevesque.site"),
  title: "Zachary Levesque | Portfolio",
  description: "Personal portfolio.",
  icons: {
    icon: "/z-logo.png",
    apple: "/z-logo.png"
  },
  openGraph: {
    title: "Zachary Levesque | Portfolio",
    description: "Personal portfolio.",
    url: "https://www.zacharylevesque.site",
    siteName: "Zachary Levesque",
    images: [
      {
        url: "/og-image-v12.png",
        width: 2400,
        height: 1260,
        alt: "Zachary Levesque portfolio preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Levesque | Portfolio",
    description: "Personal portfolio.",
    images: ["/og-image-v12.png"]
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
