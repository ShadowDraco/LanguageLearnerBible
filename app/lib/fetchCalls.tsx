const bibleApiUrl = 'https://bible-api.com/';

export const fetchBibleVerses = async (
  book: string,
  chapter: string,
  verses: string
) => {
  const response = await fetch(`${bibleApiUrl}/${book}+${chapter}:${verses}`);
  return await response.json();
};

export const makeBibleWords = (bibleVerseText: string) => {
  bibleVerseText.replace(/\W/gi, '');
  bibleVerseText.toLowerCase();

  let words = bibleVerseText.split(' ');
  console.log(words);

  return words;
};

export const calculateWordsToTranslate = (
  words: Array<string>,
  wordList: Array<string>,
  translatedList: any
) => {
  let wordsNeedTranslated: Array<string> = words.filter(word => {
    return wordList.includes(word);
  });

  console.log(wordsNeedTranslated);

  return wordsNeedTranslated;
};

export const translateCalculatedWords = async (wordList: Array<string>) => {};

export const translateWord = async (word: string) => {
  const res = await fetch(
    'https://translation-api.translate.com/translate/v1/mt',
    {
      method: 'POST',
      body: JSON.stringify({
        text: word,
        source_language: 'en',
        translation_language: 'ko',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-api-key': `${process.env.TRANSLATE_API_KEY}`,
      },
    }
  );

  return await res.json();
};
