'use client';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { Typography, Container } from '@mui/material';

import BibleForm from '@/components/BibleForm';
import { BibleContextType } from './lib/types';
import { updateLocalStorageWordList } from './lib/localStorage';
import WordList from '@/components/WordList';
import { makeBibleWords, calculateWordsToTranslate, translateCalculatedWords } from './lib/fetchCalls';


  const bibleVerses = {
    reference: 'Matthew 20:2-5',
    verses: [
      {
        book_id: 'MAT',
        book_name: 'Matthew',
        chapter: 20,
        verse: 2,
        text: '\nWhen he had agreed with the laborers for a denarius\na day, he sent them into his vineyard.\n\n',
      },
      {
        book_id: 'MAT',
        book_name: 'Matthew',
        chapter: 20,
        verse: 3,
        text: '\nHe went out about the third hour,\nand saw others standing idle in the marketplace.\n\n',
      },
      {
        book_id: 'MAT',
        book_name: 'Matthew',
        chapter: 20,
        verse: 4,
        text: '\nHe said to them, ‘You also go into the vineyard, and whatever is right I will give you.’ So they went their way.\n\n',
      },
      {
        book_id: 'MAT',
        book_name: 'Matthew',
        chapter: 20,
        verse: 5,
        text: '\nAgain he went out about the sixth and the ninth hour,\nand did likewise.\n\n',
      },
    ],
    text: '\nWhen he had agreed with the laborers for a denarius\na day, he sent them into his vineyard.\n\n\nHe went out about the third hour,\nand saw others standing idle in the marketplace.\n\n\nHe said to them, ‘You also go into the vineyard, and whatever is right I will give you.’ So they went their way.\n\n\nAgain he went out about the sixth and the ninth hour,\nand did likewise.\n\n',
    translation_id: 'web',
    translation_name: 'World English Bible',
    translation_note: 'Public Domain',
  };
  let bibleWords = makeBibleWords(bibleVerses.text);



export const BibleContext = createContext<BibleContextType>({
  book: '',
  setBook: () => {},
  chapter: '',
  setChapter: () => {},
  verses: '',
  setVerses: () => {},
  readyToSend: false,
  wordList: [],
  setWordList: () => {},
  translatedList: {},
  setTranslatedList: () => {},
  bibleResponse: {},
  setBibleResponse: () => {},
  setRemainingTokens: () => {},
});
export const useBibleContext = () => useContext(BibleContext);

export default function Home() {
  const [book, setBook] = useState<string>('');
  const [chapter, setChapter] = useState<string>('');
  const [verses, setVerses] = useState<string>('');
  const [wordList, setWordList] = useState<Array<string>>([]);
  const [translatedList, setTranslatedList] = useState<any>({});
  const [bibleResponse, setBibleResponse] = useState<any>({});
  const [remainingTokens, setRemainingTokens] = useState<string>('299987');
  const readyToSend: boolean = book !== '' && chapter !== '' && verses !== '';

  useEffect(() => {
    updateLocalStorageWordList(
      wordList,
      setWordList,
      translatedList,
      setTranslatedList
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordList]);

  useEffect(() => {
    
    translateCalculatedWords(
      bibleWords,
      calculateWordsToTranslate(bibleWords, wordList),
      translatedList,
      setTranslatedList,
      setRemainingTokens
    );
  }, [translatedList]);

  return (
    <BibleContext.Provider
      value={{
        book,
        setBook,
        chapter,
        setChapter,
        verses,
        setVerses,
        readyToSend,
        wordList,
        setWordList,
        translatedList,
        setTranslatedList,
        bibleResponse,
        setBibleResponse,
        setRemainingTokens,
      }}
    >
      <Container>
        <Typography sx={{ textAlign: 'center', mb: '1rem' }}>
          Learn a language while learning the bible!
        </Typography>

        <BibleForm />
        <WordList />
        <Typography color='white'>
          Remaining letters left to translate: {remainingTokens}
        </Typography>
      </Container>
    </BibleContext.Provider>
  );
}
