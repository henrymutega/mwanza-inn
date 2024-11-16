import localFont from "next/font/local";

export const metadata = {
  title: "Mwanza Inn",
  description: "Your comfort in style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
