/**
 * @param {string} s
 * @return {string}
 */

const expandPalindromeCheck = (s, index) => {
  var left, right, palindrome;

  left = index - 1;
  right = index + 1;
  palindrome = s[index];

  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      palindrome = s.substring(left, right + 1);
      left--;
      right++;
    } else if (s[index] === s[right]) {
      palindrome = s.substring(index, right + 1);
      break;
    } else {
      break;
    }
  }
  return palindrome;
};

var longestPalindrome = function (s) {
  var palindrome = "";

  [...s].forEach((currentCharacter, index) => {
    var tempPalindrome = expandPalindromeCheck(s, index);
    if (tempPalindrome.length > palindrome.length) {
      palindrome = tempPalindrome;
    }
  });

  console.log(palindrome);
  return palindrome;
};

longestPalindrome(
  "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"
);
longestPalindrome("cbbd");
longestPalindrome("aaaa");
longestPalindrome("tattarrattat");
