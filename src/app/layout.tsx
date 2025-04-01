import { AuthorizationProvider } from "../../context/AuthorizationProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthorizationProvider>{children}</AuthorizationProvider>
      </body>
    </html>
  );
}
