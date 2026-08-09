// import mathObj from "./math.js";  // Static import

const mathObj = await import('./math.js')  // Static import
console.log(mathObj)
mathObj.default.add(20, 10)
mathObj.default.sub(20, 10)
mathObj.default.mul(20, 10)