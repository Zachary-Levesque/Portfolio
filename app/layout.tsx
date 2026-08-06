import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PageLinks } from "@/components/page-links";
import { ViewTransitionProvider } from "@/components/view-transition-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zachary Levesque | Portfolio",
  description:
    "Electrical Engineering and Physics student building systems across machine learning infrastructure, hardware engineering, embedded systems, quantitative research, and simulation.",
  icons: {
    icon: "/favicon.svg"
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
