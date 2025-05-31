export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', background: '#f9fafb' }}>
        {children}
      </body>
    </html>
  );
}
 
