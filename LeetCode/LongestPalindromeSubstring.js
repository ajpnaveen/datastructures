/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }

  if (s.length === 2 && s[0] !== s[1]) {
    return s[0];
  }

  var inputString = s;
  var output = "";

  const isPalindrome = (input) => {
    if (input.length === 2 && input[0] === input[input.length - 1]) {
      return true;
    } else if (input.length === 3 && input[0] === input[input.length - 1]) {
      return true;
    } else if (input.length > 3) {
      if (input[0] === input[input.length - 1]) {
        var result = isPalindrome(input.substring(1, input.length - 1));
        return result;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  var result = isPalindrome(inputString);

  if (result) {
    return inputString;
  }

  const iterateLeft = (input) => {
    if (isPalindrome(input)) {
      if (input.length > output.length) {
        output = input;
        //console.log(input);
      }
    }

    if (input.length > 1) {
      iterateLeft(input.substring(0, input.length - 1));
    }
  };

  const iterateRight = (input) => {
    if (input.length > 1) {
      iterateLeft(input);
      iterateRight(input.substring(1, input.length));
    }
  };

  if (result === true) {
    console.log(
      result
        ? `${inputString} is Palindrome`
        : `${inputString} is not a Palindrome`
    );
  } else {
    var inputStringDuplicate = inputString;

    //iterateLeft(inputStringDuplicate);
    iterateRight(inputStringDuplicate);

    console.log(`Hello doctor - ${output}`);

    if (output.length === 0) {
      return s[0];
    }

    return output;
  }
};
