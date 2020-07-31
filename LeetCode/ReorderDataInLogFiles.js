const logsOld = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
];

const logs = ["art can", "own kit dig", "art zero"];

const compareElementToArray = (element, logs) => {};

const reorderLogFilesOld = (logs) => {
  const digits = [];
  const strings = [];
  logs.forEach((element) => {
    const arrayOfWords = element.split(" ");
    if (!isNaN(arrayOfWords[1])) {
      digits.push(element);
    } else {
      strings.push(element);
    }
  });

  console.log(`Strings: ${strings}`);
  console.log(`Digits: ${digits}`);
};

const reorderLogFiles = (logs) => {
  let i = 0;
  const stringOutput = [];

  while (i < logs.length - 1) {
    for (let j = i + 1; j < i < logs.length; j++) {
      if (logs[i].localeCompare(logs[j])) {
      }
    }
    i++;
  }
  for (let i = 0; i < logs.length; i++) {}

  const digits = [];
  const strings = [];

  logs.forEach((element) => {
    const arrayOfWords = element.split(" ");
    if (!isNaN(arrayOfWords[1])) {
      digits.push(element);
    } else {
      strings.push(element);
    }
  });

  console.log(`Strings: ${strings}`);
  console.log(`Digits: ${digits}`);
};

reorderLogFiles(logs);
