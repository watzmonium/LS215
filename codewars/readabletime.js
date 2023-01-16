// problem: given a duration in number of seconds, return a string in human-readable form that
// says how long that time is in years, days, hours, minutes, and seconds.

// if there are more than 2 types of things to output, they should be joined by a comma and then an and
// if only 2, just an and.
// if the number is more than 1, the label should have an 's' at the end
// if the number is 0, don't include that unit
// the largest denominations should take precedence

const SECOND_PER_MIN = 60;
const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const DAY_PER_YEAR = 365;

const time = (rawSeconds) => {
  if (rawSeconds < 1) {
    return '';
  }
  let keys = ['second', 'minute', 'hour', 'day', 'year'];
  let time = {}
  if (rawSeconds >= SECOND_PER_MIN) {
    time.minute = Math.floor(rawSeconds / SECOND_PER_MIN);
    time.second = rawSeconds % SECOND_PER_MIN;
  } else {
    time.second = rawSeconds;
  }

  if (time.minute >= MIN_PER_HOUR) {
    time.hour = Math.floor(time.minute / MIN_PER_HOUR);
    time.minute = time.minute % MIN_PER_HOUR;
  }

  if (time.hour >= HOUR_PER_DAY) {
    time.day = Math.floor(time.hour / HOUR_PER_DAY);
    time.hour = time.hour % HOUR_PER_DAY;
  }

  if (time.day >= DAY_PER_YEAR) {
    time.year = Math.floor(time.day / DAY_PER_YEAR);
    time.day = time.day % DAY_PER_YEAR;
  }

  let toPrints = keys.filter(num => time[num] > 0).reverse();
  let returnString = '';
  toPrints.forEach((word, index) => {
    let joinword;
    if (index === toPrints.length - 2) {
      joinword = ' and ';
    } else if (index === toPrints.length - 1) {
      joinword = '';
    } else {
      joinword = ', '
    }
    returnString += `${time[word]} ${word}${plural(time[word])}${joinword}`;
  });
  return returnString;
};

const plural = (number) => {
  return number > 1 ? 's' : '';
};

console.log(time(5)) // 5 seconds
console.log(time(60)) // 1 minute
console.log(time(65)) // 1 minute and 5 seconds
// console.log(time(125)) // 2 minutes and 5 seconds
// console.log(time(3600)) // 1 hour
// console.log(time(3660)) // 1 hour and 1 minute
// console.log(time(3720)) // 1 hour and 2 minutes
console.log(time(3725)) // 1 hour, 2 minutes and 5 seconds
// console.log(time(31556952)) // 1 year
console.log(time(31560677)) // 1 year, 1 hour, two minutes, and 5 seconds
// console.log(time(-1)) // ''
// console.log(time(0)) // ''





