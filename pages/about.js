import React from 'react';
import Link from 'next/link';
import pk from '../package.json'
import Header from '../components/header'

export default () => <div>
  <Header title="About pr"/>
  <Link href="/index">Index</Link>
  <pre>{JSON.stringify(pk, null, ' ')}</pre>
</div>
