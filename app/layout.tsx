import "./globals.css";

export const metadata = {
  title: "Tenaliraman News",
  description: "सच्ची खबर, सबसे पहले",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
