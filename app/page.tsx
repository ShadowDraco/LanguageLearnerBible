'use client'
import React, { useState, createContext, useContext, useEffect } from 'react'
import { Typography, Container } from '@mui/material'

import BibleForm from '@/components/BibleForm'
import { BibleContextType } from './lib/types'
import { updateLocalStorageWordList } from './lib/localStorage'
import WordList from '@/components/WordList'

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
})
export const useBibleContext = () => useContext(BibleContext)

export default function Home() {
  const [book, setBook] = useState<string>('')
  const [chapter, setChapter] = useState<string>('')
  const [verses, setVerses] = useState<string>('')
  const [wordList, setWordList] = useState<Array<string>>([])
  const [translatedList, setTranslatedList] = useState<any>({})
  const [bibleResponse, setBibleResponse] = useState<any>({})

  const readyToSend: boolean = book !== '' && chapter !== '' && verses !== ''

  useEffect(() => {
    updateLocalStorageWordList(
      wordList,
      setWordList,
      translatedList,
      setTranslatedList
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordList])

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
      }}
    >
      <Container>
        <Typography sx={{ textAlign: 'center', mb: '1rem' }}>
          Learn a language while learning the bible!
        </Typography>
        <BibleForm />
        <WordList />
      </Container>
    </BibleContext.Provider>
  )
}
