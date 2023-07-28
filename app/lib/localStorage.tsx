import { Dispatch, SetStateAction } from 'react';

export const updateLocalStorageWordList = (
  wordList: Array<string>,
  setWordList: Dispatch<SetStateAction<string[]>>
) => {
  let fromLocal_wordList: string | null =
    window.localStorage.getItem('wordList');
  let local = fromLocal_wordList
    ? JSON.parse(fromLocal_wordList)
    : window.localStorage.setItem('wordList', '[]');
  if (wordList.length < 1) {
    if (local.length > 0) {
      setWordList(local);
      console.log('grabbed saved words!');
    }
  }
  if (wordList.length > 0) {
    if (local.length !== wordList.length) {
      window.localStorage.setItem('wordList', JSON.stringify(wordList));

      console.log('updated saved words');
    }
  }
};
