// stack (primitive), Heap(Non-primitive)
// pre=7 types(string, number, boolean, null, undefined, symbol, BigInt)
// Non pre also called reference(Array, object, function)



// two types of memory
// Stack(primitive) and Heap(non primitive)
let name = "Muskaansingh"
let anothername= name
anothername = "Muski"
console.log(name)
console.log(anothername)


let userOne = {
    email:"muskaan@google.com",
    upi:"user@by"   
}

let userTwo = userOne
userTwo.email= "muski@google.com"
console.log(userOne.email)
console.log(userTwo.email)
