import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
export const metadata: Metadata = { title: "YourBrand — Tiered + Themed" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link rel="stylesheet" href={`/themes/${siteConfig.theme}.css`} /></head><body>{children}</body></html>;
}
