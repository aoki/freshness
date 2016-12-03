import React from 'react'
import Link from 'next/link'
import Head from '../components/head'

export default () => <div>
  <Head/>
  <h1>Hello world!</h1>
  <ul>
    <li><Link href="/about">about</Link></li>
  </ul>
</div>
