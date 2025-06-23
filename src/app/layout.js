import './globals.css';
import ClientSessionProvider from "@/components/ClientSessionProvider";

export const metadata = {
  title: "Nimatallahi Muslim Cooperative Society",
  description: "Empowering members with interest-free loans and secure savings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}