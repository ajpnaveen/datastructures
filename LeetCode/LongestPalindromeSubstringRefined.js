/**
 * @param {string} s
 * @return {string}
 */

const expandPalindromeCheck = (s, index) => {
  var left = index - 1;
  var right = index + 1;
  var palindrome = s[index];
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      palindrome = s.substring(left, right + 1);
      left--;
      right++;
    } else {
      break;
    }
  }
  return palindrome;
};

const expandPalindromeCheckEven = (s, index, index1) => {
  var left = index - 1;
  var right = index1 + 1;
  var palindrome = s.substring(index, index1 + 1);
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      palindrome = s.substring(left, right + 1);
      left--;
      right++;
    } else {
      break;
    }
  }
  return palindrome;
};

var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }

  if (s.length === 2) {
    if (s[0] !== s[1]) {
      return s[0];
    } else {
      return s;
    }
  }

  var isPalindrome = true;
  for (var j = 1; j < s.length; j++) {
    if (s[j] === s[j - 1]) {
      if (isPalindrome === false) {
        break;
      }
    } else {
      isPalindrome = false;
    }
  }

  if (isPalindrome) {
    return s;
  }
  var palindrome = "";
  for (var i = 0; i < s.length; i++) {
    var tempPalindrome = "";
    {
      tempPalindrome = expandPalindromeCheck(s, i);
      if (tempPalindrome.length > palindrome.length) {
        palindrome = tempPalindrome;
      }
    }
  }

  var palindromeTwo = "";
  for (var i = 0; i < s.length; i++) {
    var tempPalindrome = "";

    if (i > 0 && s[i - 1] === s[i]) {
      tempPalindrome = expandPalindromeCheckEven(s, i - 1, i);
      if (tempPalindrome.length > palindromeTwo.length) {
        palindromeTwo = tempPalindrome;
      }
    }
  }

  if (palindrome.length > palindromeTwo.length) {
    console.log(palindrome);
    return palindrome;
  } else {
    console.log(palindromeTwo);
    return palindromeTwo;
  }
};

longestPalindrome(
  "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"
);
