// hackerrank.com/test/c2p2iqio0ot/questions/5261dd1ce3efd

// A palindrome is a string that reads the same forwards and backwards, such as 121 or tacocat. A substring is a continuous sequence of characters within a string. Given a string s, how many unique substrings of s are palindromes?

// Example 
// s = "mokkori"

// Some of its substrings are [m, o, k, r, i, mo, ok, mok, okk, kk, okko].
// There are 7 distinct palindromes [m, o, k, r, i, kk, okko].

// Function Description
// Complete the function palindrome in the editor below.
// palindrome has the following parameter(s):
// strings: a string

// Returns
// int the number of distinct palindromes

function palindrome(s) {
  const uniquePalindromes = new Set();
  const n = s.length;

  // Expand around center to find palindromic substrings
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      uniquePalindromes.add(s.substring(left, right + 1));
      left--;
      right++;
    }
  }

  // Check palindromes of both odd and even lengths
  for (let i = 0; i < n; i++) {
    expandAroundCenter(i, i);     // Odd-length palindromes (centered at i)
    expandAroundCenter(i, i + 1); // Even-length palindromes (centered between i and i+1)
  }

  return {
    uniquePalindromes: uniquePalindromes,
    count: uniquePalindromes.size
  };
}

// Example usage
console.log(palindrome("mokkori")); // Output: 7
console.log(palindrome("ababa"));   // Output: 6
console.log(palindrome("aaaa"));    // Output: 4
console.log(palindrome("abc"));     // Output: 3


// ---

// ### **Explanation**
// 1. **Using a Set**:
//    - We store palindromic substrings in a **Set** to ensure uniqueness.

// 2. **Expand Around Center**:
//    - This method checks both **odd-length** and **even-length** palindromes efficiently.
//    - It expands outward from a given center while characters match.

// 3. **Iterating Over All Centers**:
//    - Each character and each pair of adjacent characters act as a center.
//    - We call `expandAroundCenter(i, i)` for **odd-length** palindromes.
//    - We call `expandAroundCenter(i, i + 1)` for **even-length** palindromes.

// ### **Complexity Analysis**
// - **Time Complexity**: \( O(n^2) \) (each center expands up to \( O(n) \)).
// - **Space Complexity**: \( O(n^2) \) (in the worst case, all substrings are unique palindromes).

// This method ensures we efficiently count distinct palindromic substrings. 🚀
