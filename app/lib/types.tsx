import { Dispatch, SetStateAction } from 'react';

export type BibleContextType = {
  book: string;
  setBook: (b: string) => void;
  chapter: string;
  setChapter: (c: string) => void;
  verses: string;
  setVerses: (v: string) => void;
  readyToSend: boolean;
  wordList: Array<string>;
  setWordList: Dispatch<SetStateAction<string[]>>;
  translatedList: any;
  setTranslatedList: (t: any) => void;
  bibleResponse: any;
  setBibleResponse: (b: any) => void;
  setRemainingTokens: (t: string) => void;
};

export type BiblePageProps = {
  params: { book: string; chapter: string; verses: string };
};

export type BookResponse = {
  reference: string;
  verses: Array<JSON>;
  text: string;
  translation_name: string;
};
