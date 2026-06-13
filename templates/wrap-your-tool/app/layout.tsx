// ⛔ DO NOT TOUCH — page shell. (Edit the <title> text only if you like.)
import "./globals.css";

export const metadata = {
  title: "Wrap Your Tool",
  description: "A Madison tool, wrapped for a real user.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
