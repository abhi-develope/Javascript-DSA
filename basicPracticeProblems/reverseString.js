// Create a function that takes a string and returns the reversed version of it.



// using js in buid function
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and then join it back into a string
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(reversedString);  // Output: "olleh"



  // without using js inbuidfunction
  function revString(str) {
    let reversedStr = '';
    
    // Loop through the string from the last character to the first
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]; // Append each character to the reversedStr
    }
    
    return reversedStr;
  }
  
  // Example usage:
  const originalStr = "hello";
  const reversedStr = reverseString(originalString);
  console.log(reversedString);  // Output: "olleh"
  
  