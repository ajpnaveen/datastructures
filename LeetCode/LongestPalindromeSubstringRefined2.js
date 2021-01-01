/**
 * @param {string} s
 * @return {string}
 */

const expandPalindromeCheck = (s, index, twoCharString = null) => {
  var left, right, palindrome;

  if (twoCharString) {
    left = index - 1;
    right = index + 2;
    palindrome = twoCharString;
  } else {
    left = index - 1;
    right = index + 1;
    palindrome = s[index];
  }

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
  var palindrome = "";
  var sameString = true;

  [...s].map((currentCharacter, index) => {
    if (index > 0 && currentCharacter != s[index - 1]) {
      sameString = false;
    }

    var tempPalindrome = "";
    if (
      index > 0 &&
      index < s.length &&
      currentCharacter === s[index - 1] &&
      currentCharacter === s[index + 1]
    ) {
      tempPalindrome = expandPalindromeCheck(s, index);
      if (tempPalindrome.length > palindrome.length) {
        palindrome = tempPalindrome;
      }
    } else if (
      index > 0 &&
      index < s.length &&
      currentCharacter === s[index - 1]
    ) {
      if (index < s.length && currentCharacter !== s[index + 1]) {
        tempPalindrome = s.substring(index - 1, cindex + 1);
      } else {
        tempPalindrome = expandPalindromeCheck(
          s,
          index,
          s.substring(index - 1, index + 1)
        );
      }

      if (tempPalindrome.length > palindrome.length) {
        palindrome = tempPalindrome;
      }

      console.log(
        `I'm in if tempPlaindrome: ${tempPalindrome} Plaindrome: ${palindrome}`
      );
    } else {
      tempPalindrome = expandPalindromeCheck(s, index);
      if (tempPalindrome.length > palindrome.length) {
        palindrome = tempPalindrome;
      }

      console.log(
        `I'm in if tempPlaindrome: ${tempPalindrome} Plaindrome: ${palindrome}`
      );
    }
  });

  if (sameString) {
    console.log(s);
    return s;
  } else {
    console.log(palindrome);
    return palindrome;
  }
};

//longestPalindrome(
//  "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"
//);
//longestPalindrome("cbbd");
//longestPalindrome("aaaa");
longestPalindrome("tattarrattat");
