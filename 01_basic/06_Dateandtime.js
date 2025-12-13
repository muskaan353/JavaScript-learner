let myDate = new Date
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let mycreatedDate = new Date(2003, 6, 20)
console.log(mycreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))