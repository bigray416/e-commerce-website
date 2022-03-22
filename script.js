username = document.querySelector('#username')
showtext =document.querySelector('.show-text')
username.addEventListener('mouseout', function(){
    username.style="border: 1px solid red"
    
})
username.addEventListener('output', function(){
    username.style="border: 1px solid black"
    
})
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }
// let a = 0;
// while (a < array.length) {
//      console.log(array[a])
//     a++
// }

// let a1 = -1;

// do {
//     a1++
//     console.log(array[a1])
// } while (a1 < array.length);

// array.forEach(e => {
//     console.log(e)
// });