import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "donaldson.black",
  description: "S. Donaldson, H. Black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
