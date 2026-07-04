import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Amay Bistro | Premium Café Experience in Jubilee Hills',
  description: 'Experience premium fine dining at Amay Bistro. Authentic Indian, Asian, and modern cuisine in Jubilee Hills, Hyderabad. Open daily 12 PM - 11:30 PM.',
  keywords: 'café, restaurant, fine dining, Hyderabad, Jubilee Hills, bistro, Indian cuisine',
  openGraph: {
    title: 'Amay Bistro | Premium Café Experience',
    description: 'Discover premium dining at Amay Bistro',
    url: 'https://amaybistro.com',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d4844a" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
