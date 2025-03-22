// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charMap = new Array(26).fill(0);

  for(let i = 0; i < s.length; i++){
    charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; 
  }

  return charMap.every(char => char === 0);
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
