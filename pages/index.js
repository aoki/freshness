import React from 'react'
import Link from 'next/link'
import Header from '../components/header'

export default () => <div>
  <Header title="Hello Next"/>
  <h1>Hello world!</h1>
  <ul>
    <li><Link href="/about">about</Link></li>
  </ul>
</div>
