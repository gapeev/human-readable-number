module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }
  return stringify(number);
}

function stringify(number) {
  if (map[number] !== undefined) {
    return map[number];
  }

  if (number < 100) {
    const units = number % 10;
    return `${map[number - units]} ${map[units]}`;
  }

  const rest = number % 100;
  const hundreds = (number - rest) / 100;
  return `${map[hundreds]} hundred ${stringify(rest)}`.trimEnd();
}

const map = {
  '0': '',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
};
