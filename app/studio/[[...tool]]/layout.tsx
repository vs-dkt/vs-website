export const metadata = { title: 'VitalSail Studio' }

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
