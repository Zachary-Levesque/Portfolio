import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PageLinks } from "@/components/page-links";
import { ViewTransitionProvider } from "@/components/view-transition-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio for systems engineering and quant-track roles."
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
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="page-content mx-auto w-full max-w-6xl flex-1 px-6 py-12">
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
