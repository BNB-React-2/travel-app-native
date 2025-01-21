export function createRegex(searchTerms: string): RegExp {
  const words = searchTerms.split(/\s+/);
  const pattern = '(' + words.join('|') + ')';
  return new RegExp(pattern, 'gi');
}

export function match(searchTerms: string, phrase: string): boolean {
  const regex = createRegex(searchTerms);
  const matches = phrase.match(regex);
  if (matches) {
    const uniqueMatches = [
      ...new Set(matches.map((word) => word.toLowerCase())),
    ];
    const searchWords = searchTerms.toLowerCase().split(/\s+/);
    return searchWords.every((word) =>
      uniqueMatches.some((match) => match.includes(word))
    );
  }
  return false;
}
