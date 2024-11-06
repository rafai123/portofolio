import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import { DM_Sans } from '@next/font/google';
// import { Poppins } from '@next/font/google';

import { Comic_Neue, DM_Sans, Inter, Poppins } from 'next/font/google';

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '700'], // Adjust according to your needs
// });
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   variable: '--font-poppins', // Custom CSS variable
// })
// const comicNeue = Comic_Neue({
//   subsets: ['latin'],
//   weight: ['400', '700'], // Adjust according to your needs
//   variable: '--font-comic-neue', // Custom CSS variable
// })
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Adjust according to your needs
  variable: '--font-inter', // Custom CSS variable
})
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'], // Pilih berat font yang diperlukan
//   variable: '--font-dm-sans', // Custom CSS variable
// });
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-poppins', // Specify the weights you need
// });

export const metadata: Metadata = {
  title: "Rafai Dev",
  description: "Rafai Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "75e280619f80450cb444e4ab0dced14c"}'></script><!-- End Cloudflare Web Analytics -->
      </body>
    </html>
  );
}
