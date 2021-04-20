import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

import styles from '@/styles/Layout.module.css'

export default function Layout({ title, description, keywords, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Music Events | Find your favorite parties',
  description: 'Find the lasted musical events',
  keywords: 'music, events, dj, parties, bands, jazz, live, edm',
}
