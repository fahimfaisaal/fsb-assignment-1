export const countChars = (string) => ({
  letters: string.replace(/[^a-z]/gi, '').length,
  numbers: string.replace(/[^0-9]/gi, '').length,
  symbols: string.replace(/[a-z0-9]/gi, '').length
})
