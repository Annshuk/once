// Import stylesheets
import './style.css';

const once = (fn) => {
  let result;

  return (...args) => {
    if (fn) {
      result = fn(...args);
      fn = null;
    }

    return result;
  };
};

const sum = (a, b) => a + b;
const sumNumber = once(sum);

console.log(sumNumber(2, 8)); //10;
console.log(sumNumber(2, 5)); //10;
console.log(sumNumber(2, 5)); //10;
console.log(sumNumber(2, 5)); //10;
