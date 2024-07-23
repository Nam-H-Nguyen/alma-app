import type { Metadata } from "next";
import '@/styles/globals.css';
import LeadStoreProvider from "@/store/LeadStoreProvider";

export const metadata: Metadata = {
  title: "Alma App",
  description: "Lead Management",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LeadStoreProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </LeadStoreProvider>
  );
}
