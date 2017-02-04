//Question 1
function reverseWord(word){

    let stringReversed = ''

    for(let i = word.length - 1; i >= 0; i--) {
        stringReversed += word[i]
    }

    console.log(stringReversed)
}

console.log("Question 1")
reverseWord("hello")
reverseWord("world")
reverseWord('dynomite')
console.log()

//Question 2
function replaceVowels(word){

    let modifiedString = ''

    for(let i = 0; i < word.length; i++) {
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i'  || word[i] === 'o' || word[i] === 'u'){
            modifiedString += '*'
        }
        else{
            modifiedString += word[i]
        }
    }

    console.log(modifiedString)
}

console.log('Question 2')
replaceVowels('javascript')
replaceVowels('angular')
replaceVowels('supercalifragilisticexpialidocious')
console.log()

//Question 3
console.log('Question 3')
function countLetters(arr){

    const values = {}

    for(let i = 0; i < arr.length; i++) {

        let key = arr[i]
        
        if(values[key]) {
            values[key]++
        }
        else{
            values[key] = 1
        }
    }

    console.log(values)
}

countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'])
countLetters(['a', 'q', 'a', 'b', 'b', 'lol', 'lol'])
console.log()

//Question 4
console.log('Question 4')
function oddsAndEvens(arr){

    const odds = []
    const evens = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evens.push(arr[i])
        }
        else{
            odds.push(arr[i])
        }
    }

    console.log('odds = ' + odds)
    console.log('even = ' + evens)

}

oddsAndEvens([21, 99, 43, 1, 8, 2, 48, 82])
oddsAndEvens([1, 10, 11, 23, 15, 28, 109])
console.log()

//Question 5
console.log('Question 5')
const cars = [
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]

function markupValue(obj, num){
    

}

//Question 6
// const transformer = {
//     name: 'Optimus Prime',
//     teams: 'Autobots',
//     colors: ['red', 'blue', 'white'],
//     example: {
//         nested: true
//     }
// }
// transformer.homeWorld = 'Cybertron'
// transformer['vehicle'] = 'truck'
// console.log(transformer)

// const
//     name = 'Cydney',
//     anything = 'job',
//     val = 'software engineer'

// const person = { name, [anything]: val }
// console.log(person)