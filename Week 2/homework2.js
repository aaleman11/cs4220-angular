//Question 1
function reverseString(word){

    //split the word
    let splitWord = word.split("")

    //reverse the word
    let reverseWord = splitWord.reverse();

    //join reversed word
    let joinWord = reverseWord.join("");

    console.log(joinWord)

}

console.log("Question 1")
reverseString("hello")
reverseString("world")
reverseString("dynomite")
console.log()

//Question 2
function replaceVowels(word){
    let newWord = word.replace(/a|e|i|o|u/gi, "*")

    console.log(newWord)
}

console.log("Question 2")
replaceVowels("javascript")
replaceVowels("angular")
replaceVowels("supercalifragilisticexpialidocious")
console.log()

//Question 3
console.log("Question 3")
class Calculator{
    
    constructor(value){

        if(isNaN(value)){
            this.value = 0
        }
        else{
            this.value = value
        }

    }

    multiply(num){
        this.value *= num
    }

    add(num){
        this.value += num
    }

    divide(num){
        this.value /= num
    }

    subtract(num){
        this.value -= num
    }

    print(){
        console.log(this.value)
    }

    clear(){
        this.value = 0
    }
}
console.log("---CALCULATOR 1---")
const calc_v1 = new Calculator()        //0
calc_v1.multiply(3)                     //0
calc_v1.add(10)                         //10
calc_v1.divide(2)                       //5
calc_v1.subtract(4)                     //1
calc_v1.print()                         //1
calc_v1.clear()                         //0
calc_v1.print()                         //0

console.log("---CALCULATOR 2---")
const calc_v2 = new Calculator(2)       //2
calc_v2.multiply(3)                     //6
calc_v2.add(10)                         //16
calc_v2.divide(2)                       //8
calc_v2.subtract(4)                     //4
calc_v2.print()                         //1
calc_v2.clear()                         //0
calc_v2.print()                         //0

console.log()

//Question 4
console.log("Question 4")
const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]

function convertToFunction(arr) {

    const newObj = {}

    arr.forEach(function(element) {

        let type = element[0]
        let value = element[1]
    
        newObj[type] = value

    });

    return newObj

}

const modifiedArray = convertToFunction(media_arr)
console.log(modifiedArray)
console.log()

//Question 5
console.log("Question 5")

const media_obj = { media: 'facebook', company: 'github', likes: 58445 }

function convertToArray(obj){

    const arr = Object.entries(obj)

    return arr

}

const newArray = convertToArray(media_obj)
console.log(newArray)


