import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import React from 'react'
import { Button } from '@material-ui/core'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <header className={styles.header}>
      </header>
      <main>{children}</main>

      <Button variant="outlined" color="primary">
        Hello World
      </Button>
    </div>
  )
}