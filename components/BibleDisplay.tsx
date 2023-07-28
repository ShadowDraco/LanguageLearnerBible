'use client';
import React, { useContext } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { BibleContext } from '@/app/page';
import {
  calculateWordsToTranslate,
  makeBibleString,
} from '@/app/lib/fetchCalls';

export default function BibleDisplay(fetchedBibleVerses: any) {
  const {
    book,
    chapter,
    verses,
    wordList,
    translatedList,
    setTranslatedList,
    setRemainingTokens,
  } = useContext(BibleContext);
  // const bibleVerses = { ...fetchedBibleVerses.fetchedBibleVerses };
  const bibleVerses = { text: '' };
  // setRemainingTokens(BibleVerses.limit_remaining);

  return (
    <Container
      sx={{
        mt: 2,
        mb: 2,
        p: 3,
        backgroundColor: 'wheat',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography color='white'>{book}</Typography>
      <Typography color='white'>{chapter}</Typography>
      <Typography color='white'>{verses}</Typography>

      <Typography>{bibleVerses.text}</Typography>
      <Button href='/'>Back</Button>
    </Container>
  );
}
