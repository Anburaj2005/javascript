// console.log("hello world")


// let age=78
// age=98
// console.log(age)

// const salary=0
// salary=29000
// console.log(salary)


// const person={
//     firstname :'vishwas',
//     lastname:'code evaluation',
//     age:39
// }
// console.log(person.age)
// const odd=[1,2,3,4]
// console.log(odd[3])

// let a=3
// a='vishwas'
// a=true
// a=3
// console.log(a)

// // let x=5,y=3
// // console.log(++x)

// const var1=0
// const var2=''
// console.log(var1==var2)
// console.log(var1===var2)
 
// const num=34

// if(num>0){
//     console.log('Number is positive')
// }else if(num<0){
//     console.log('number is negative')
// }
// else{
//     console.log('Number is zero')
// // }
// const color='green'

// switch(color){
//     case 'red':
//     console.log('color is red')
//     break
//     case'blue':
//     console.log('color is blue')
//     break
//     case 'green':
//     console.log('color is green')
//     break
//     default:
//         console.log('color is not defined')
// }

// for (i=1;i<=5;i++){
//     console.log('Iteration number' + i)
// }

// i=1
// while(i<=10){
//     console.log('Iteration number'+ i)
//     i++;
// }

// i=1
// do{
//     console.log('Iteration number'+ i)
//     i++;
// } while (i<=5)


// const numArray=[1,2,3,4,5]
// for (const num of numArray){
//       console.log( num)

// }

// function greet(username){
//     console.log('good morning'  +    username);
// }

// greet('Brue')
// greet('clarke')


// function add(a,b){
//     return a+b ;
// }
//  const sum=add(1000,10)
//  console.log(sum)
// 

// Advanced Javascript

let a='ten'

function outer(){
    let b=20
    function inner(){
        let c=30
        console.log (a,b,c)
    }
    inner()
}
outer()
