const frames = ['|', '/', '-', '\\'];
let index = 0;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const spinner = async() => {
  for (let i = 0; i < frames.length * 2; i++) {
    process.stdout.write(`\r${frames[index++ % frames.length]}   `);
    await delay(200);
  }
};

process.stdout.write('hello from spinner1.js... \rheyyy\n');
spinner();
