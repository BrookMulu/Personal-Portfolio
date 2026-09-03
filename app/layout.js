import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brook Gebreeyesus — Software Developer',
  description: 'The portfolio of Brook Gebreeyesus. Explore web applications, mobile projects, and experience across frontend and backend development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
