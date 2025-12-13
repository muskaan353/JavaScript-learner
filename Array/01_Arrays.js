const myArr = [1,2,3,4,5]
const myHeros = ["Saktiman", "naagraj"]

const newArr = new Array(1,2,3,4)
console.log(myArr[1])

myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr)

const NewArr2 = myArr.join()
console.log(myArr)
console.log(typeof NewArr2)

const myarrr= myArr.slice(1, 3)
console.log('A', myarrr)

const mynn = myArr.splice(1, 3)
console.log("B", myArr)
console.log(mynn)



