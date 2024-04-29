//  array 

let friendsName : string[]=["khizer","qasim","ali","zain","umair","ehtisham","zyan","saoud","anwar ","ayaz","sohail"]
console.log(friendsName)
//  i need to add some more friends name so we use push method 
friendsName.push("khalid ","talha","usman","umar")
console.log(friendsName)

// pop method 

//   i need to remove my last friends name so we use pop() methd
friendsName.pop()
// if i want to see my all friendsname in the  list so we use foreach method 
console.log(friendsName)

// unshift method

//  i need to add my friends name but before [0] index so we use un shift method
friendsName.unshift("oasama ","taoimour")
console.log(friendsName)

// shift method 

// i want to remove first element so that i use shift() method
friendsName.shift()
console.log(friendsName)

// slice method

// slice()method is uesd to slection the element  but they provide any 2 arguments of an array so i will try
// slice method does not changed your original arrays
let selectFriend :string[]= friendsName.slice(0,2) 
console.log(selectFriend)

// splice method
// ths splice() method is used to add or remove elements in your arrays 
// splice method change your elements 
let deleted:string[]=friendsName.splice(7, 4, "azan","faizan")
console.log(friendsName) 





































































































































































