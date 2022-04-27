function getMinMax(str) {
  let newText = str.split(' ');
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  newText.forEach(item => {
    if (!isNaN(item / 0)) {
      min = parseFloat(item) < min ? parseFloat(item) : min;
      max = parseFloat(item) > max ? parseFloat(item) : max;
    }
  });

  let result = {
    min: min,
    max: max,
  };
  return result;
}