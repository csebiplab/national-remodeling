import "./globals.css"


export const metadata = {
  title: "Toronto Concrete Pumping Company | Prime Concrete Pumping in Toronto",
  description: "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
