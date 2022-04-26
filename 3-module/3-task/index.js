function camelize(str) {
  return str.split('-').map((text, index) => index == 0 ? text : text[0].toUpperCase() + text.slice(1)).join('');
}
