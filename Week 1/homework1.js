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

function averageArray(arr){
    let count = 0
    let totalSum = 0

    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            totalSum += (arr[i]*1)
            count++
        }
    }

    console.log(totalSum/count)
}

averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }])
console.log()

//Question 6
console.log('Question 6')
const cars = [
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]

function markupValue(arr, num){

    const cars = []
    let total = 0

    for(let i = 0; i < arr.length; i++) {

        const car = arr[i]
        const key = car.type
        const value = car.wholesale * ((num/100) + 1)
        total += (value - car.wholesale)

        const newValue = {[key]: value}
        cars.push(newValue)

        // console.log(cars)


    }

    const newValues = {'cars': cars, total}

    console.log(newValues)


}

markupValue(cars, 10.5)
