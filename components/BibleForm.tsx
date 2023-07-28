'use client';
import { useContext } from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  FormGroup,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { BibleContext } from '../app/page';

import Link from 'next/link';

export default function BibleForm() {
  const theme = useTheme();
  const { book, setBook, chapter, setChapter, verses, setVerses, readyToSend } =
    useContext(BibleContext);

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.contrastText }}>
      <FormGroup sx={{ mb: 1, p: 3 }}>
        <FormControl>
          <InputLabel htmlFor='book'>Book</InputLabel>
          <Input
            id='book'
            placeholder='Start with a book'
            onChange={e => {
              setBook(e.currentTarget.value);
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='chapter'>Chapter</InputLabel>
          <Input
            id='chapter'
            placeholder='Pick a chapter'
            onChange={e => {
              setChapter(e.currentTarget.value);
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='verses'>Verses</InputLabel>
          <Input
            id='verses'
            placeholder='Find the verses'
            onChange={e => {
              setVerses(e.currentTarget.value);
            }}
          />
        </FormControl>
      </FormGroup>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href={readyToSend ? `/bible/${book}/${chapter}/${verses}` : ''}>
          <Button
            disabled={!readyToSend}
            variant='contained'
            color='primary'
          >
            Get the verses!
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
