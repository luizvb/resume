import "./globals.css";

export const metadata = {
  title: "Luiz Vieira — Forward Deployed Engineer · Head of AI",
  description:
    "Engineering leader with 12+ years at the intersection of deep technical work and client impact. Forward Deployed Engineer, Head of AI, hands-on leader.",
  openGraph: {
    title: "Luiz Vieira — Forward Deployed Engineer · Head of AI",
    description:
      "Engineering leader with 12+ years at the intersection of deep technical work and client impact.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
