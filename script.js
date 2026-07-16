
//Task 13.1: User Management System (Using Classes)


// class user{
//     constructor(userName,mobileNum,age){
//         this.userName = userName;
//         this.mobileNum = mobileNum;
//         this.age = age;
//     }

//     getUserDetails(){
//         return (`UserName: ${this.userName}
// MobileNumber: ${this.mobileNum}
// Age: ${this.age}`)
//     }

//     isAdult(){
//         if(this.age>18){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }

// const ram = new user("ram","3256532",20);
// const ravi = new user("ravi","23565325",15);
// const alice = new user("alice","3565325",22);

// let users = [];
// users.push(ram);
// users.push(ravi);
// users.push(alice);


// for(let i=0;i<users.length;i++){
//     console.log(users[i].getUserDetails());
//     console.log(users[i].isAdult());
// }


//Task 13.2: Working with JSON Data

let jsonData = `[
    {
        "username": "Alice",
        "mobileNum": "9876543210",
        "age": 25
    },
    {
        "username": "Bob",
        "mobileNum": "9123456780",
        "age": 30
    },
    {
        "username": "Charlie",
        "mobileNum": "9001122334",
        "age": 17
    }
]`;

let users = JSON.parse(jsonData);

for(let i = 0;i<users.length;i++){
    console.log(`${users[i].username}-${users[i].mobileNum}-${users[i].age}`)
}

let jsonOutput = JSON.stringify(users);

console.log(jsonOutput);