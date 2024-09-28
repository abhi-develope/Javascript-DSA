// Check if a given year is a leap year.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  // Test the function
  const year = 2024;
  console.log(isLeapYear(year));  // Output: 2024 is a leap year.
  