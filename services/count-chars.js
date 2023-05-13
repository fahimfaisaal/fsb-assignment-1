export const countChars = (string) => ({
  letters: string.replace(/[^a-z]/gi, '').length,
  numbers: string.replace(/[^0-9]/gi, '').length,
  symbols: string.replace(/[a-z0-9]/gi, '').length
})

export const countCharsV2 = (string) => {
  const stringDetails = {
    letters: 0,
    numbers: 0,
    symbols: 0
  }

  for (const char of string.toLowerCase()) {
    const charCode = char.charCodeAt()

    if (charCode > 96 && charCode < 123) {
      stringDetails.letters++
    } else if (charCode > 47 && charCode < 58) {
      stringDetails.numbers++
    } else {
      stringDetails.symbols++
    }
  }

  return stringDetails;
}
