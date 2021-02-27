function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(rgbVal) {
  if (rgbVal <= 0) return '00';
  else if (rgbVal >= 255) return 'FF';
  else if (rgbVal < 16) return '0' + rgbVal.toString(16).toUpperCase();
  else return rgbVal.toString(16).toUpperCase();
}
