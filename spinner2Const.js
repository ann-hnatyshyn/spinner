const spinner = function() {
  let step1 = setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  let step2 = setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  let step3 = setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  let step4 = setTimeout(() => {
    process.stdout.write('\r\\  ');
  }, 700);
};

module.export = spinner;





// const step5 = setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 900);

// const step6 = setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 1100);

// const step7 = setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1200);

// const step8 = setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1400);