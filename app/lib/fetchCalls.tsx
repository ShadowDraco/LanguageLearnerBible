const bibleApiUrl = 'https://bible-api.com/';

export const fetchBibleVerses = async (
  book: string,
  chapter: string,
  verses: string
) => {
  const response = await fetch(`${bibleApiUrl}/${book}+${chapter}:${verses}`);
  return await response.json();
};
