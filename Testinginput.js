const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// This will prompt you in the terminal
readline.question('What is your name? ', (name) => {
  console.log(`\nNice to meet you, ${name}! Your Code Runner settings are working perfectly!`);
  readline.close();
});
