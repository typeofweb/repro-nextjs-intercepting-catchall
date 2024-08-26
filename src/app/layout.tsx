export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section>
          <h2>Children</h2>
          <div>{children}</div>
        </section>
        <section>
          <h2>Modal</h2>
          <div>{modal}</div>
        </section>
      </body>
    </html>
  );
}
