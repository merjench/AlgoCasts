/*
 * Complete the 'spellingBeeSolutions' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordlist
 *  2. STRING_ARRAY puzzles
 */

 /*
 Requirements:
 Input:
    wordslist: An array of strings. This is your list of 'valid English words'
    puzzles: An array of strings. Each string is a puzzle
  Output:
    An array of integers. Each integer should be the number of valid words in the corresponding puzzle.
  Constraints:
    Both the wordlist and the puzzles will be supplied in all capital letters
    All words in teh wordlist will be of length 5 or greater (in other words, you don't have to worry about the word length contstraint of the puzzle)
    Every puzzle will be of exact length 7
    Every puzzle will consist of 7 distinct letters

  Note: Performance ofy our solution is important. A naive solution will not get you full points - to score 100/100, you'll need something significantly faster.

Example:
 input:
   wordlist: ["APPLE", "PLEAS", "PLEASE"]
   puzzles: ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPXY", "XAELPSY"]

  Expected output;
   [0,1,3,2,0]

  Explanation:
    None of the words in the wordlist can be formed from the letters in puzzle 0
    Only APPLE is valid for puzzle 1
    All three words are valid for puzzle 2
    Only PLEAS and PLEASE are valid for puzzle 3, since APPLE does not contain the key letter S
    None of the words are valid for puzzle 4, since none contain the key letter X 
 */

 function spellingBeeSolutions(wordlist, puzzles) {
   //write your code here
   wordlist = [];
   puzzles = [];


 }
