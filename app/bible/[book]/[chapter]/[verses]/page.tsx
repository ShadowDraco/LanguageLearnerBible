import { Typography } from '@mui/material'
import React, { useContext } from 'react'

import { fetchBibleVerses } from '@/app/lib/fetchCalls'
import { BiblePageProps } from '@/app/lib/types'
import { redirect } from 'next/dist/server/api-utils'
import { BibleContext } from '@/app/page'
import BibleDisplay from '@/components/BibleDisplay'

export default async function Bible({ params }: BiblePageProps) {
  const fetchedBibleVerses = await fetchBibleVerses(
    params.book,
    params.chapter,
    params.verses
  )

  return <BibleDisplay fetchedBibleVerses={...fetchedBibleVerses} />
}
