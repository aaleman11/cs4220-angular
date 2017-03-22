const
    dir = require('node-dir')
    treeify = require('treeify')
    crypto = require('crypto')
    // hash = crypto.createHash('sha256')

// module.exports.run = (source) => {
    // console.log(source)
    //Read each file in directory

const hashValues = []
// const dupes = [];

let path = process.argv[2]

const findDupes = (path, valuesArr, dupes) => {

    dir.readFiles(path, function(err, content, next) {
    if (err) throw err;

    const hash = crypto.createHash('sha256')
    hash.update(content)

    let hexValue = hash.digest('hex')
    //console.log(hexValue);
    valuesArr.push(hexValue)

    //console.log(valuesArr);
    
    //console.log('content:', hexValue);
    //console.log(path);
    next();
}, 

function(err, files){
    if (err) throw err;

    //console.log('1')
    const pathName = files
    //console.log(pathName);
    //pathArr.push(pathName);
    //console.log('2')

    const dupes = {}

    for(let i = 0; i < pathName.length; i++) {

        let hash = valuesArr[i];

        if(!(hash in dupes)){
            dupes[hash] = [pathName[i]]
        }
        else{
            dupes[hash].push(pathName[i])
        }

    }

    const values = Object.values(dupes)

    // const dupesPaired = {}

    // for(let i = 0; i < values.length; i++) {

    //     let pathList = values[i]

    //     for(let j = 0; j < pathList.length; j++) {

    //         let key = pathList[0]

    //         if(j == 0) {
    //             dupesPaired[key] = {}
    //         }
    //         else{
                
    //             let path = pathList[j]

    //             dupesPaired[key].push(path)
    //         }

    //     }

    // }


    console.log("The following lists of files contain duplicate content of each other:")
    console.log()

    for(let i = 0; i < values.length; i++) {

        let duplicates = values[i]

        console.log(duplicates)
        console.log()

    }

    //console.log(values)
    // console.log(dupesPaired)


    // console.log(treeify.asTree(values));
    
    //console.log('finished reading files:', pathName);
});

// console.log(valuesArr);
// console.log(pathArr);

}

findDupes(path, hashValues)



// dir.readFiles("./duplicate-search");
// }

// console.log("Lists");
// console.log(hashValues);
// console.log(pathNames);