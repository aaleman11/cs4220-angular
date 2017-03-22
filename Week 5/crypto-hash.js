const crypto = require('crypto');
const hash = crypto.createHash('sha256');

// const something = hash.update('This is the data to hash');


// console.log(hash.digest('hex'));

// const somethingElse = hash.update('This is the other data to hash');

// console.log(hash.digest('hex'));

hash.on('readable', () => {
  const data = hash.read();
  if (data)
    console.log(data.toString('hex'));
    // Prints:
    //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
});

hash.on('text1')
// hash.update('This is the data to hash');

// console.log(hash.digest('hex'));

