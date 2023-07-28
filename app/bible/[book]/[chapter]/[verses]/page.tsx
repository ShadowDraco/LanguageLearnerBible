import { Typography } from '@mui/material';
import React from 'react';

import { fetchBibleVerses } from '@/app/lib/fetchCalls';
import { BookResponse, BiblePageProps } from '@/app/lib/types';

export default async function Bible({ params }: BiblePageProps) {
  const fetchedBibleVerses = await fetchBibleVerses(
    params.book,
    params.chapter,
    params.verses
  );
  const bibleVerses: BookResponse = { ...fetchedBibleVerses };

  return (
    <div>
      New Bible Verses: <br></br>
      <Typography color={'white'}>{bibleVerses.reference}</Typography>
    </div>
  );
}
