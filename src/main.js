const fs = require('fs');

// eslint-disable-next-line no-console
console.log({
  answer: 42,
});

fs.readdir('./node_modules', { withFileType: true }, (error, dirEntryList) => {
  if (!error) {
    dirEntryList.forEach((element) => {
      console.log(element);
    });
  } else {
    // eslint-disable-next-line no-console
    console.error(error);
  }
});
