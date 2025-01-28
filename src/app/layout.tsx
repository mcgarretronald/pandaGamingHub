import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";  // Import the Script component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "PANDA GAMING HUB",
  description: "The PANDA GAMING HUB OFFICIAL WEBSITE",
  icons: {
    icon: "Images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DF6SQJG0D7"
          async
        />
        <Script
          strategy="afterInteractive"
          id="google-analytics-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DF6SQJG0D7');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
