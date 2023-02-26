// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic (string1, string2, string3, string4){
    let mnemonic = '';
    if (string1){
      mnemonic += string1[0];
      }
    if (string2){
      mnemonic += string2 [0];
     }
    if (string3){
      mnemonic += string3 [0];
    }
    if (string4){
      mnemonic += string4 [0]
    }
    return mnemonic;
  }
// Do not change the code below this line
module.exports = { myMnemonic };
