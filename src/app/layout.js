
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Activus",
  description: "Activus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-matter">{children}</body>
    </html>
  );
}
