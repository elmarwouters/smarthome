export const metadata = {
  title: 'Smart Home - Lights',
  description: 'Control your lights from anywhere',
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
