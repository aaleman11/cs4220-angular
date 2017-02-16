// // // TIMERS
// console.log('Before')
// setTimeout(() => {
//     console.log('inside the timeout')
// }, 10) // in ms
// // 1000 ms = 1 sec
// console.log('After')

// console.log('Before')
// let count = 0
// const id = setInterval(() => {
//     if (count === 5)
//         clearInterval(id)
//     else
//         console.log('repeat')

//     count++
// }, 10)
// console.log('After')

//Question 1
console.log("Question 1")

let count = 5
const id = setInterval(() => {
    if(count==0) {
        clearInterval(id)
    }
    else{
        console.log(count)
    }
    count--

}, 500)

console.log()

//Question 2


