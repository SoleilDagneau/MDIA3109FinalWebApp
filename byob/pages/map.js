import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Map from '../components/Map'

export default function Home() {
  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="author" content="The BYOB team" />
        <meta property="og:title" content="The BYOB map page" />
        <meta property="og:description" content="Our interactive map page" />
        <link rel="icon" href="/busicon.png" />
      </Head>
      <main className={styles.main}>
        <Map/>
      </main>
    </>
  )
}
