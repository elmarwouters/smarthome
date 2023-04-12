import './globals.css'

export const metadata = {
  title: 'Smart Home',
  description: 'Made awesome by Elmar Wouters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
