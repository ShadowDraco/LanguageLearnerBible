import React, { useContext, KeyboardEvent, useState, useRef } from 'react';

import { Typography, Box, FormControl, InputLabel, Input } from '@mui/material';
import { BibleContext } from '@/app/page';

export default function WordList() {
  const { wordList, setWordList } = useContext(BibleContext);
  const [currentWord, setCurrentWord] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setWordList([...wordList, currentWord]);
      setCurrentWord('');
    }
  };

  return (
    <Box
      sx={{
        m: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        backgroundColor: 'wheat',
        p: 3,
      }}
    >
      <Typography
        color='black'
        sx={{ maxWidth: '100%', overflowY: 'scroll' }}
      >
        {wordList.map(word => {
          return `${word}, `;
        })}
      </Typography>

      <FormControl>
        <InputLabel htmlFor='add'>Add more words!</InputLabel>
        <Input
          id='add'
          placeholder='supercalifra...'
          value={currentWord}
          onChange={e => {
            setCurrentWord(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </FormControl>
    </Box>
  );
}
