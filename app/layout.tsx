import './globals.css'

export const metadata = {
  title: "Bogdan's Recovery Ltd | Vehicle Recovery Mansfield",
  description: "24/7 vehicle recovery, breakdown assistance and car transport in Mansfield. We Tow - You Go.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
