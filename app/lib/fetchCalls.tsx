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
  let replaced = bibleVerseText.replace(/\W/gi, ' ');
  let lowered = replaced.toLowerCase();
  let words = lowered.split(' ');
  return words;
};

export const calculateWordsToTranslate = (
  words: Array<string>,
  wordList: Array<string>
) => {
  let wordsNeedTranslated: Array<string> = [];
  words.forEach(word => {
    if (wordList.includes(word) && !wordsNeedTranslated.includes(word)) {
      wordsNeedTranslated.push(word);
    }
  });

  return wordsNeedTranslated;
};

export const translateCalculatedWords = async (
  bibleWords: Array<string>,
  words: Array<string>,
  translatedList: any,
  setTranslatedList: any,
  setRemainingTokens: any
) => {
  //! CHECK IF THE PROMISE MAP WORKS
  let finalWords: Array<string> = await Promise.all(
    bibleWords.map(async word => {
      let replacement: string = '';
      if (words.includes(word)) {
        replacement = translatedList[word]
          ? translatedList[word]
          : await translateWord(
              word,
              translatedList,
              setTranslatedList,
              setRemainingTokens
            );
      } else {
        replacement = word;
      }
      return replacement;
    })
  );

  console.log(finalWords);
  return finalWords;
};

export const translateWord = async (
  word: string,
  setTranslatedList: any,
  translatedList: any,
  setRemainingTokens: any
) => {
  console.log('translating new word:', word, process.env.TRANSLATE_API_KEY);
  const res = await fetch(
    'https://translation-api.translate.com/translate/v1/mt',
    {
      method: 'POST',

      body: JSON.stringify({
        text: word,
        source_language: 'en',
        translation_language: 'ko',
        api_key: `${process.env.TRANSLATE_API_KEY}`,
      }),

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

        'x-api-key': `${process.env.TRANSLATE_API_KEY}`,
      },
    }
  );
  console.log(res);
  let response = await res.json();

  console.log(response);
  let newTranslatedWord: any = {};
  newTranslatedWord[word] = response.translation;
  console.log(newTranslatedWord);
  setTranslatedList({ ...translatedList, newTranslatedWord });
  setRemainingTokens(response.limit_remaining);
};
