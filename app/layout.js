import NavBar from './component/NavBar'
import './globals.css'
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont', })

export const metadata = {
  title: 'Trung Nguyen',
  description: 'Software Engineer',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body className={montserrat.variable}>{children}
        <NavBar />
      </body>
    </html>
  )
}
