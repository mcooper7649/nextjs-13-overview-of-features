import '../styles/globals.css';
import Header from './Header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <title>Mike's Website</title>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
