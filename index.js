
// find longest word in a sentence
// function longestString(sentence) {
//     let firstArr=[]
//     let longestArr = [];
//     let sameLength = []

//     for (let i = 0; i < sentence.length; i++){
//         firstArr.push(sentence[i]);
//         if (sentence[i] ===' ') {
//             if (firstArr.length > longestArr.length) {
//                 longestArr = firstArr;
//                 firstArr=[]
//             } else if (firstArr.length===longestArr.length) {
//                 sameLength.push(firstArr)
//                 console.log("same length",sameLength)
//                 firstArr=[]
//             } else {
//                 // console.log("longest", longestArr)
//                 firstArr=[]
//             }
//         }
//     }
//     let word = longestArr.join('');
//     console.log("word", word);
//     console.log("longestArr",longestArr)
// }
// const sentence = "The quicks brown fox jumps over the lazy dog"

// longestString(sentence)


// check whether a string is palindrome or not

// function checkPalindrome(word) {
//     let start = 0;
//     let sanitizedWord = ''
    
//     for (let i = 0; i < word.length; i++){
//         let char = word[i].toLowerCase()
//         if ((char >= 'a' && char <= "z") || (char >= '0' && char <= '9')) {
//             sanitizedWord+=char
//         }
//     }
//     console.log(sanitizedWord)
//     let end = sanitizedWord.length - 1;

//     while (start<end) {
//         if (sanitizedWord[start] !== sanitizedWord[end]) {
//           return false
//         }
//         start++;
//         end--;
        
//     }
    
// return true

// }

// let result = checkPalindrome("A man, a plan, a canal: Panama")
// console.log(result)

// reverse the order of words

// function reverseWords(str) {
//     let result = "";
//     let word = "";
    
//     // Loop through the string in reverse
//     for (let i = str.length - 1; i >= 0; i--) {

//         // console.log(str[i])
//         if (str[i] !== ' ') {
//             // Add character to the current word
//             word = str[i] + word;
//         } else {
//             // Add the word to the result with a space
//             result += word + " ";
//             console.log(word)
//             word = "";
//         }
//     }
    
//     // Add the last word (since there won't be a space after it)
//     result += word;

//     return result;
// }

// let inputString = "Hello World from ChatGPT";
// const reversedString=reverseWords(inputString);
// console.log(reversedString);  // Outputs: "ChatGPT from World Hello"

// merge and sort them



// polyfill of Array.prototype.every
// Array.prototype.myMap = function(callback) {
//     const arr = this; // `this` refers to the array the method is called on
//     const result = []; // Create a new array to store the results

//     for (let i = 0; i < arr.length; i++) {
//        let boolean_value=callback(arr[i]); // Apply the callback to each element and store the result
//         if(boolean_value===false){
//           return false
//         }
//     }
  
//     return true// Return the new array
// };

// const numbers = [2,4, 6, 8];

// const allEven = numbers.myMap((everyArr) => {
//     return everyArr%2===0
//     // return everyArr * 2; // Multiply each element by 2
// });

// console.log(allEven); // Output: [4, 8, 12, 16]


// git remote add origin https://github.com/mithleshkr1669/js_practice.git
// git branch -M main
// git push -u origin main

