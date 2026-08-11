// This is Nodejs Code, here await can be directly used without async

let response = await fetch('https://jsonplaceholder.typicode.com/users');
let finalResponse = await response.json();
console.log(finalResponse)