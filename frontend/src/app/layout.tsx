import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import { type Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    template: "%s | FOSTI UMS",
    default: "FOSTI UMS",
  },
  description: "Company Profile FOSTI UMS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="light">
          <AntdRegistry>
            <main className="gradient-bg-main min-h-screen">
              <Navbar />
              {children}
              <Analytics />
              <SpeedInsights />
              <Footer />
            </main>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
