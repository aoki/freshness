import React from 'react';
import Link from 'next/link';
import pk from '../package.json'
import Header from '../components/header'
import config from '../config/default'

export default () => <div>
  <Header title="About pr"/>
  <Link href="/index">Index</Link>
  <pre>{JSON.stringify(pk, null, ' ')}</pre>
  <pre>{JSON.stringify(config, null, ' ')}</pre>
</div>
