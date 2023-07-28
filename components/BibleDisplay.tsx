'use client'
import React, { useContext } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { BibleContext } from '@/app/page'

export default function BibleDisplay(fetchedBibleVerses: any) {
  const { book, chapter, verses } = useContext(BibleContext)
  const bibleVerses = { ...fetchedBibleVerses.fetchedBibleVerses }
  console.log(book, chapter, verses, bibleVerses)
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
  )
}
