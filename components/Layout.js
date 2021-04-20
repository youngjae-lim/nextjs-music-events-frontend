import Head from 'next/head'

import styles from '../styles/Layout.module.css'

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Music Events | Find your favorite parties',
  description: 'Find the lasted musical events',
  keywords: 'music, events, dj, parties, bands, jazz, live, edm',
}
