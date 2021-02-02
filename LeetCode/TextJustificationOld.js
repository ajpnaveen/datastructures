/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

const canBeAddedToCurrentLine = (
  output,
  wordsSofar,
  currentWord,
  maxWidth,
  newOutput,
  lastLine
) => {
  if (wordsSofar.length === 0) {
    wordsSofar.push(currentWord);
    return { flag: true, resultArray: wordsSofar };
  }

  const lengthOfWords = wordsSofar.length + 1;
  var charLength = 0;
  wordsSofar.forEach((val) => {
    charLength += val.length;
  });

  if (charLength + currentWord.length + 1 <= maxWidth) {
    const spacesLength = maxWidth - (currentWord.length + charLength);
    if (lengthOfWords > 2) {
      if (spacesLength >= lengthOfWords - 1) {
        wordsSofar.push(currentWord);
        return { flag: true, resultArray: wordsSofar };
      }
    } else {
      wordsSofar.push(currentWord);
      return { flag: true, resultArray: wordsSofar };
    }
  }
  newOutput.push(addIndendation(wordsSofar, maxWidth, lastLine));
  output.push(wordsSofar);
  return { flag: false, resultArray: [], output: output, newOutput: newOutput };
};

const createSpaces = (count) => {
  var counter = 0;
  var spaces = "";

  while (counter < count) {
    spaces += ` `;
    counter++;
  }

  return spaces;
};

const addIndendation = (lineArray, maxWidth, lastLine = false) => {
  var charLength = 0;
  lineArray.forEach((val) => {
    charLength += val.length;
  });

  var spaceLength = maxWidth - charLength;
  var indendationString = "";
  var space = "-";

  if (lastLine) {
    lineArray.forEach((value, index) => {
      if (index === 0) {
        indendationString += `${value}`;
      } else {
        indendationString += ` ${value}`;
      }
    });

    if (indendationString.length < maxWidth) {
      indendationString += createSpaces(maxWidth - indendationString.length);
    }
    console.log(indendationString);
    return indendationString;
  }

  if (lineArray.length === 1) {
    var spaces = createSpaces(spaceLength);
    indendationString = `${lineArray[0]}${spaces}`;
    console.log(indendationString);
    return indendationString;
  }

  if (spaceLength % (lineArray.length - 1) === 0) {
    var spaces = createSpaces(spaceLength / (lineArray.length - 1));

    lineArray.forEach((value, index) => {
      if (index === 0) {
        indendationString += `${value}`;
      } else {
        indendationString += `${spaces}${value}`;
      }
    });
    console.log(indendationString);
    return indendationString;
  } else {
    var spaces = createSpaces(Math.round(spaceLength / (lineArray.length - 1)));

    if (spaceLength === lineArray.length) {
      lineArray.forEach((value, index) => {
        if (index === 0) {
          indendationString += `${value}`;
        } else if (index === 1) {
          indendationString += `  ${value}`;
        } else {
          indendationString += ` ${value}`;
        }
      });
      console.log(indendationString);
      return indendationString;
    }

    lineArray.forEach((value, index) => {
      if (index === 0) {
        indendationString += `${value}`;
      } else if (index === lineArray.length - 1) {
        if (lineArray.length === 3) {
          indendationString += `${createSpaces(
            spaceLength - Math.round(spaceLength / (lineArray.length - 1))
          )}${value}`;
        } else {
          indendationString += ` ${value}`;
        }
      } else {
        indendationString += `${spaces}${value}`;
      }
    });

    console.log(indendationString);
    return indendationString;
  }
};

var fullJustify = function (words, maxWidth) {
  var output = [];
  var wordsSofar = [];
  var indexCounter = 0;
  var newOutput = [];

  while (indexCounter < words.length) {
    var res = canBeAddedToCurrentLine(
      output,
      wordsSofar,
      words[indexCounter],
      maxWidth,
      newOutput,
      false
    );

    wordsSofar = res.resultArray;

    if (res.newOutput) {
      newOutput = res.newOutput;
    }
    if (res.output) {
      output = res.output;
    }
    if (res.flag) {
      indexCounter++;
    }
  }

  newOutput.push(addIndendation(wordsSofar, maxWidth, true));
  return newOutput;
};

//var words = ["What", "must", "be", "acknowledgment", "shall", "be"];
//var maxWidth = 16;

/* var words = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
];
var maxWidth = 20; */

//var words = ["This", "is", "an", "example", "of", "text", "justification."];
var maxWidth = 16;

var words = [
  "The",
  "important",
  "thing",
  "is",
  "not",
  "to",
  "stop",
  "questioning.",
  "Curiosity",
  "has",
  "its",
  "own",
  "reason",
  "for",
  "existing.",
];

words = [
  "ask",
  "not",
  "what",
  "your",
  "country",
  "can",
  "do",
  "for",
  "you",
  "ask",
  "what",
  "you",
  "can",
  "do",
  "for",
  "your",
  "country",
];

words = [
  "Don't",
  "go",
  "around",
  "saying",
  "the",
  "world",
  "owes",
  "you",
  "a",
  "living;",
  "the",
  "world",
  "owes",
  "you",
  "nothing;",
  "it",
  "was",
  "here",
  "first.",
];

maxWidth = 30;
fullJustify(words, maxWidth);
//addIndendation(["what", "you", "can", "do"], 16, false);
//addIndendation(["This", "is", "an"], 16);

[
  "Don't  go  around  saying  the",
  "world owes you a living; the",
  "world owes you nothing; it was",
  "here first.                   ",
][
  ("Don't  go  around  saying  the",
  "world  owes  you a living; the",
  "world owes you nothing; it was",
  "here first.                   ")
][
  ("Don't  go  around  saying  the",
  "world  owes  you a living; the",
  "world owes you nothing; it was",
  "here first.                   ")
];
