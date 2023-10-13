import { ContextProvider } from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatting Applications ",
  description: "created by Wani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
