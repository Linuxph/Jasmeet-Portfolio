import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jasmeet.design'),
  title: 'Jasmeet | Senior Graphic Designer & AI Video Specialist | Healthcare, Hospitals & Magazine Design',
  description:
    'Highly experienced Senior Graphic Designer, Art Director & AI Video Generation Specialist with 10+ years in visual design. Proven expertise designing comprehensive brand identities, visual campaigns, and collateral for healthcare professionals, hospitals, medical centers, clinical networks, alongside luxury editorial magazines, publication layouts, and motion reels.',
  keywords: [
    'Graphic Designer',
    'Senior Graphic Designer',
    'AI Video Generation',
    'AI Video Creator',
    'Generative AI Video',
    'Healthcare Graphic Designer',
    'Hospital Branding',
    'Healthcare Professionals Branding',
    'Medical Center Branding',
    'Clinic Design and Identity',
    'Magazine Design',
    'Editorial Design',
    'Publication Design',
    'Hospital Campaign Design',
    'Medical Collateral Design',
    'Brand Identity Specialist',
    'Art Director',
    'Photoshop Master',
    'Illustrator Expert',
    'CorelDRAW Prepress Specialist',
    'Packaging Design',
    'Billboard and Large Format Print',
    'Midjourney and Runway AI Specialist',
    'Jasmeet Design Portfolio',
  ],
  authors: [{ name: 'Jasmeet' }],
  creator: 'Jasmeet',
  publisher: 'Jasmeet Visual Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jasmeet | Senior Graphic Designer & AI Video Specialist',
    description:
      'Highly experienced in graphic design, AI video generation, hospital & healthcare branding, and magazine editorial design with 10+ years of craft.',
    siteName: 'Jasmeet Portfolio',
    images: [
      {
        url: '/jasmeet-portrait.jpg',
        width: 1024,
        height: 1024,
        alt: 'Jasmeet - Senior Graphic Designer & AI Video Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasmeet | Senior Graphic Designer & AI Video Specialist',
    description:
      'Highly experienced in graphic design, AI video generation, hospital & healthcare branding, and magazine editorial design with 10+ years of craft.',
    images: ['/jasmeet-portrait.jpg'],
    creator: '@jasmeet_design',
  },
  category: 'Design & Creative',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jasmeet',
  jobTitle: 'Senior Graphic Designer, AI Video Specialist & Art Director',
  description:
    'Highly experienced in graphic designing and AI video generation, having worked extensively for healthcare professionals, hospitals, medical centers, and editorial magazine publications.',
  knowsAbout: [
    'Graphic Design',
    'AI Video Generation',
    'Healthcare Branding',
    'Hospital Marketing & Wayfinding',
    'Medical Center Collateral',
    'Magazine & Editorial Layout',
    'Prepress & Print Production',
    'Brand Identity Systems',
    'CorelDRAW',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe Premiere Pro',
    'Midjourney AI',
    'Runway Gen AI',
  ],
  alumniOf: 'Bachelor of Computer Applications',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jakarta.variable} min-h-screen overflow-x-hidden font-sans antialiased bg-[#080b12] text-[#f8fafc] selection:bg-[#ff6b35]/30 selection:text-white`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
