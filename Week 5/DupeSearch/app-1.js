const
    dir = require('node-dir')
    treeify = require('treeify')
    crypto = require('crypto')
    // hash = crypto.createHash('sha256')

// module.exports.run = (source) => {
    // console.log(source)
    //Read each file in directory

const hashValues = [];
// const dupes = [];

let path = process.argv[2]

const findDupes = (path, valuesArr, dupes) => {

    dir.readFiles(path, function(err, content, next) {
    if (err) throw err;

    const hash = crypto.createHash('sha256')
    hash.update(content)

    let hexValue = hash.digest('hex');
    // console.log(hexValue);
    valuesArr.push(hexValue);

    // console.log(valuesArr);
    
    // console.log('content:', hexValue);
    // console.log(path);
    next();
}, 

function(err, files){
    if (err) throw err;

    // console.log('1')
    const pathName = files;
    // console.log(pathName);
    // pathArr.push(pathName);
    // console.log('2')

    let indexes = []

    mainloop:
        for(let i = 0; i < pathName.length-1; i++) {

        // skips the index if it's already been matched
        for (let i = 0; i < indexes.length; i++) {
            if (indexes[i] == i) {
                continue mainloop;
            }
        }

        console.log(pathName[i], 'Contains a match with:')

        for(let j = i + 1; j < pathName.length; j++) {

            if (valuesArr[i] == valuesArr[j]) {
                console.log(pathName[j])
                indexes.push(j)
            }
        }
        console.log()

    }

    
    //console.log('finished reading files:', pathName);
});

// console.log(valuesArr);
// console.log(pathArr);

}

findDupes(path, hashValues);



// dir.readFiles("./duplicate-search");
// }

// console.log("Lists");
// console.log(hashValues);
// console.log(pathNames);