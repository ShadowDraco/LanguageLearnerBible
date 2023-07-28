import { Dispatch, SetStateAction } from 'react'

export const updateLocalStorageWordList = (
  wordList: Array<string>,
  setWordList: Dispatch<SetStateAction<string[]>>,
  translatedList: JSON,
  setTranslatedList: Dispatch<SetStateAction<string[]>>
) => {
  let fromLocal_wordList: string | null =
    window.localStorage.getItem('wordList')

  let local = fromLocal_wordList
    ? JSON.parse(fromLocal_wordList)
    : window.localStorage.setItem('wordList', '[]')

  if (wordList.length < 1) {
    if (local.length > 0) {
      setWordList(local)
      getLocalStorageTranslatedList(setTranslatedList)
      console.log('grabbed saved words!')
    }
  }
  if (wordList.length > 0) {
    if (local.length !== wordList.length) {
      window.localStorage.setItem('wordList', JSON.stringify(wordList))
      updateLocalStorageTranslatedList(translatedList)
      console.log('updated saved words')
    }
  }
}

export const getLocalStorageTranslatedList = (
  setTranslatedList: Dispatch<SetStateAction<string[]>>
) => {
  let fromLocal_translatedList: string | null =
    window.localStorage.getItem('translatedList')

  let localTranslated = fromLocal_translatedList
    ? JSON.parse(fromLocal_translatedList)
    : window.localStorage.setItem('translatedList', '{}')

  setTranslatedList(localTranslated)
  console.log('grabbed translated words')
}

export const updateLocalStorageTranslatedList = (translatedList: JSON) => {
  window.localStorage.setItem('translatedList', JSON.stringify(translatedList))

  console.log('updated saved translations')
}
