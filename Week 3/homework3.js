//Question 1
console.log("Question 1")

let count = 5
function countDown(count) {

    const id = setInterval(() => {
    if(count==0) {
        clearInterval(id)
    }
    else{
        console.log(count)
    }
    count--

}, 500)
    
}

countDown(5)
console.log()

// Question 2
console.log("Question 2")

let character = 'a'

const isLowerCase = (char) => {

    return new Promise((resolve, reject) => {

        if(char == char.toLowerCase()) {
            resolve(`this letter was resolved: ${char}`)
        }
        else {
            reject(`this letter was rejected: ${char}`)
        }
    })
}


const letters = ['A', 'b', 'c', 'D', 'e']

const sortLetters = (letters) => {
    const promises = letters.map((char) => {
        return isLowerCase(char).catch((err) => {
            return err

        })
    })

    Promise.all(promises)
        .then((results) => {
            console.log(results)
        })
}

sortLetters(letters)
console.log()

//Question 3
console.log("Question 3")

const compare = (word, wordReversed, callback) => {

    callback (word === wordReversed)

} 

const reverseWord = (word, callback) => {

    let reverse = word.split("").reverse().join("")

    compare(word, reverse, (result) => {
        
        callback(result)

    })

}

const print = (word) => {

    reverseWord(word, (result) => {
        
        console.log(result)

    })
}

print('kayak')
print('canoe')

