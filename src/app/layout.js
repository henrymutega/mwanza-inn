import localFont from "next/font/local";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Mwanza Inn",
  description: "Your comfort in style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body>
        {children}
      </body>
    </html>
  );
}
