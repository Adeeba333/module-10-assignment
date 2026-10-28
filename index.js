function calculateDifference(a, b) {return a-b;}
function isOdd(number) {return number % 2 !==0; }
function findMin(numbers) {return Math.min(...numbers); }
function filterEvenNumbers(numbers) {return numbers.filter(number => number % 2 ===0);  }
function sortArrayDescending(numbers) {return [...numbers].sort((a,b)=> b-a);  }
function lowercaseFirstLetter(str) {return str.charAt(0).toLowerCase() + str.slice(1); }
function findAverage(numbers) 
    {let sum =0;
        for (let number of numbers){sum += number;} 
    return sum / numbers.length;
    }
function isLeapYear(year) 
    {return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0); }

console.log(calculateDifference(10, 4));
console.log(isOdd(7));
console.log(findMin([5, 2, 8, 1, 9]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sortArrayDescending([3, 8, 1, 6, 2]));
console.log(lowercaseFirstLetter("Hello"));
console.log(findAverage([10, 20, 30, 40]));
console.log(isLeapYear(2024));