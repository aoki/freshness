import React from 'react';
import Link from 'next/link';
import pk from '../package.json'
import Head from '../components/head'

export default () => <div>
  <Head/>
  <Link href="/index">Index</Link>
  <pre>{JSON.stringify(pk, null, ' ')}</pre>
</div>
