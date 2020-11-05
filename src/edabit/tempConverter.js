function convert(deg) {
  if (!deg.includes("C") && !deg.includes("F")) return "Error";
  let temp = deg
    .split("")
    .filter((el) => Number(el) || el == 0)
    .join("");

  if (deg.includes("-")) temp = "-" + temp;

  if (deg.includes("C")) {
    let tempF = Math.round(temp * (9 / 5) + 32);
    return `${tempF}°F`;
  } else {
    let tempC = Math.round(((temp - 32) * 5) / 9);
    return `${tempC}°C`;
  }
}

console.log(convert("32°C")); // 90°F
