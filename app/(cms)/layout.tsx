import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Layout",
  description: "This is the CMS layout for the application.",
};

export default function CmsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <html lang="en">
        <body>{children}</body>
      </html>
    </div>
  );
}
