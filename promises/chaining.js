function double(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 1000); // Simulate an asynchronous operation with a 1-second delay
  });
}

async function processPromises(numbers) {
    const doubledNumbers = await Promise.all(numbers.map(double));
    return doubledNumbers.reduce((acc, curr) => acc + curr, 0);
}


processPromises([2, 4, 6, 8])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })