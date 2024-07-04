'use client';

import { useEffect } from 'react';
import NotFoundPage from './not-found';

export const metadata = {
  title: 'JSON Formatter',
  description: 'JSON Formatter',
}

export default function Error() {
  useEffect(() => {
    document.title = 'JSON Formatter - Erro'
  }, [])
  return <NotFoundPage />;
}