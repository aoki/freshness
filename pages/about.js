import React from 'react';
import Link from 'next/link';

import Header from '../components/header';

export default () => <div>
  <Header title="About Freshness"/>
  <p><strong>Freshness</strong> is to keep clean pull requests for development.</p>
  <Link prefetch href="/index"><a>Index</a></Link>
</div>;
