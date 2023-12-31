import Link from 'next/link'

import './lib/AntdRegistry'

import './globals.css'

export const metadata = {
  title: 'Life-study of the Bible with Witness Lee, Radio Broadcast of Living Stream Ministry',
  description: 'Generated by Lois',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <div className='logo' style={{ background: 'white', padding: 6}}>
        <section><Link href="/"><img src="/logo-only.gif" width="64" height="64" /></Link>
        <p>Living Stream Ministry<br />Life-study of the Bible Radio Broadcast</p></section></div>
        {children}
      </body>
    </html>
  )
}
