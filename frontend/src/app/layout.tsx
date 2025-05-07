import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import { type Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FOSTI UMS",
  description: "Company Profile FOSTI UMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
              <Footer />
            </main>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
