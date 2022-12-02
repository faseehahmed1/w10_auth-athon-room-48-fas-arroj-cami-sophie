function signGenerator(day, month) {
  let astro_sign = "";

  // checks month and date within the
  // valid range of a specified zodiac
  if (month === "december") {
    if (day < 22) astro_sign = "sagittarius";
    else astro_sign = "capricorn";
  } else if (month === "january") {
    if (day < 20) astro_sign = "capricorn";
    else astro_sign = "aquarius";
  } else if (month === "february") {
    if (day < 19) astro_sign = "aquarius";
    else astro_sign = "pisces";
  } else if (month === "march") {
    if (day < 21) astro_sign = "pisces";
    else astro_sign = "aries";
  } else if (month === "april") {
    if (day < 20) astro_sign = "aries";
    else astro_sign = "taurus";
  } else if (month === "may") {
    if (day < 21) astro_sign = "taurus";
    else astro_sign = "gemini";
  } else if (month === "june") {
    if (day < 21) astro_sign = "gemini";
    else astro_sign = "cancer";
  } else if (month === "july") {
    if (day < 23) astro_sign = "cancer";
    else astro_sign = "leo";
  } else if (month === "august") {
    if (day < 23) astro_sign = "leo";
    else astro_sign = "virgo";
  } else if (month === "september") {
    if (day < 23) astro_sign = "virgo";
    else astro_sign = "libra";
  } else if (month === "october") {
    if (day < 23) astro_sign = "libra";
    else astro_sign = "scorpio";
  } else if (month === "november") {
    if (day < 22) astro_sign = "scorpio";
    else astro_sign = "sagittarius";
  }
  console.log(astro_sign);
  return astro_sign;
}

export default signGenerator;

/*Switch function signGenerator(zodiacday, zodiacmonth) {
    console.log(zodiacday);
    console.log(zodiacmonth);
  let sign = "";
  switch (sign) {
    case (zodiacmonth === "february" && zodiacday >= 19) ||
      (zodiacmonth === "march" && zodiacday <= 20):
      sign = "PISCES";
      break;

    case (zodiacmonth === "march" && zodiacday >= 21) ||
      (zodiacmonth === "april" && zodiacday <= 19):
      sign = "ARIES";
      break;

    case (zodiacmonth === "april" && zodiacday >= 20) ||
      (zodiacmonth === "may" && zodiacday <= 20):
      sign = "TAURUS";
      break;

    case (zodiacmonth === "may" && zodiacday >= 21) ||
      (zodiacmonth === "june" && zodiacday <= 20):
      sign = "GEMINI";
      break;

    case (zodiacmonth === "june" && zodiacday >= 21) ||
      (zodiacmonth === "july" && zodiacday <= 22):
      sign = "CANCER";
      break;

    case (zodiacmonth === "july" && zodiacday >= 23) ||
      (zodiacmonth === "august" && zodiacday <= 22):
      sign = "LEO";
      break;

    case (zodiacmonth === "august" && zodiacday >= 23) ||
      (zodiacmonth === "september" && zodiacday <= 22):
      sign = "VIRGO";
      break;

    case (zodiacmonth === "september" && zodiacday >= 23) ||
      (zodiacmonth === "october" && zodiacday <= 22):
      sign = "LIBRA";
      break;

    case (zodiacmonth === "october" && zodiacday >= 23) ||
      (zodiacmonth === "november" && zodiacday <= 21):
      sign = "SCORPIO";
      break;

    case (zodiacmonth === "november" && zodiacday >= 22) ||
      (zodiacmonth === "december" && zodiacday <= 21):
      sign = "SAGITTARIUS";
      break;

    case (zodiacmonth === "december" && zodiacday >= 22) ||
      (zodiacmonth === "january" && zodiacday <= 19):
      sign = "CAPRICORN";
      break;

    case (zodiacmonth === "january" && zodiacday >= 20) ||
      (zodiacmonth === "february" && zodiacday <= 18):
      sign = "AQUARIUS";
      break;

    default:
      sign = "";
  }
    console.log(sign)
  return sign;
}

export default signGenerator;
*/
