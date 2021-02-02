/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const createSpaces = (count) => {
  var counter = 0;
  var spaces = "";

  while (counter < count) {
    spaces += ` `;
    counter++;
  }

  return spaces;
};

const indent = (lineWords, maxWidth) => {
  var length = 0;
  lineWords.forEach((item) => {
    length += item.length;
  });

  var spacesLength = maxWidth - length;
  var line = "";

  if (lineWords.length === 1) {
    if (lineWords[0].length < maxWidth) {
      line = `${lineWords[0]}${createSpaces(maxWidth - lineWords[0].length)}`;
    } else {
      line = lineWords[0];
    }
  } else if (spacesLength === wordLength - 1) {
    lineWords.forEach((item, index) => {
      if (index !== 0) {
        line += ` ${item}`;
      } else {
        line = item;
      }
    });
  } else {
    var wordLength = lineWords.length;
    var evenSpaces = Math.floor(spacesLength / (wordLength - 1));
    var remainingSpaces = spacesLength - evenSpaces * (lineWords.length - 1);
    var emptySpaces = createSpaces(evenSpaces);

    lineWords.forEach((item, index) => {
      if (index !== 0) {
        if (remainingSpaces > 0) {
          line += ` ${emptySpaces}${item}`;
          remainingSpaces--;
        } else {
          line += `${emptySpaces}${item}`;
        }
      } else {
        line = item;
      }
    });
  }

  return line;
};

const createLineArray = (words, maxWidth) => {
  var output = [];
  var line = "";
  var lineWords = [];

  words.forEach((word, index) => {
    if (line.length === 0 && word.length === maxWidth) {
      line = word;
      lineWords.push(word);
      output.push(line);
      line = "";
      lineWords = [];
    } else if (line.length + word.length + 1 <= maxWidth) {
      line.length === 0 ? (line += word) : (line += ` ${word}`);
      lineWords.push(word);
    } else {
      output.push(indent(lineWords, maxWidth));
      line = word;
      lineWords = [];
      lineWords.push(word);
    }
    if (index === words.length - 1) {
      if (line !== "") {
        var length = maxWidth - line.length;
        if (length > 0) {
          line = `${line}${createSpaces(length)}`;
        }
        output.push(line);
      }
    }
  });

  return output;
};

const fullJustify = (words, maxWidth) => {
  var result = createLineArray(words, maxWidth);
  console.log(result);
  return result;
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

words = ["What", "must", "be", "acknowledgment", "shall", "be"];
maxWidth = 16;

words = ["a", "b", "c", "d", "e"];
maxWidth = 1;

words = ["a"];
maxWidth = 1;

fullJustify(words, maxWidth);
//addIndendation(["what", "you", "can", "do"], 16, false);
//addIndendation(["This", "is", "an"], 16);
/* 
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
]; */
