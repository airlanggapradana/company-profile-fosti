import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "FOSTI UMS",
  description: "Company Profile FOSTI UMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem>
          <AntdRegistry>
            <main className="gradient-bg-main min-h-screen">
              <Navbar />
              {children}
            </main>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
