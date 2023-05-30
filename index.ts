function numberToWords(number: number): string {
  const units = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
    'dua belas',
    'tiga belas',
    'empat belas',
    'lima belas',
    'enam belas',
    'tujuh belas',
    'delapan belas',
    'sembilan belas',
  ]

  const tens = [
    '',
    '',
    'dua puluh',
    'tiga puluh',
    'empat puluh',
    'lima puluh',
    'enam puluh',
    'tujuh puluh',
    'delapan puluh',
    'sembilan puluh',
  ]

  const scales = [
    '',
    'ribu',
    'juta',
    'miliar',
    'triliun',
    'kuadriliun',
    'kuintiliun',
    'sekstiliun',
    'septiliun',
    'oktiliun',
    'noniliun',
    'desiliun',
    'undesiliun',
    'duodesiliun',
    'tredesiliun',
    'kuatuordesiliun',
    'kuintesiliun',
    'sekstesiliun',
    'septendesiliun',
    'oktodesiliun',
    'novemdesiliun',
    'vigintiliun',
  ]

  if (number === 0) {
    return 'nol'
  }

  let result = ''

  // Split the number into groups of three digits
  const chunks: number[] = []
  while (number) {
    chunks.push(number % 1000)
    number = Math.floor(number / 1000)
  }

  // Convert each chunk to words
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]
    if (chunk) {
      let chunkWords = ''
      const hundreds = Math.floor(chunk / 100)
      const tensAndUnits = chunk % 100

      if (hundreds) {
        if (hundreds === 1) {
          chunkWords += 'seratus '
        } else {
          chunkWords += units[hundreds] + ' ratus '
        }
      }

      if (tensAndUnits) {
        if (tensAndUnits < 20) {
          chunkWords += units[tensAndUnits] + ' '
        } else {
          const tensDigit = Math.floor(tensAndUnits / 10)
          const unitsDigit = tensAndUnits % 10
          chunkWords += tens[tensDigit] + ' ' + units[unitsDigit] + ' '
        }
      }

      chunkWords += scales[i] + ' '
      result = chunkWords + result
    }
  }

  return result.trim()
}

export default numberToWords
