// [{
//     id: 'sadjkfg askjd gaskj fg',
//     name:  'Adrian',
//     room:  'Office'
// }]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        // return user that was removed
        var user = this.users.filter((user) => user.id === id)[0];

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
    
        return namesArray;
    }
} 

var people = new Users();

people.addUser('123','Fred', 'Lounge');

console.log(people.users);

module.exports = {Users};

// class Person {
//     constructor (name, age) {
//         console.log(name, age);
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Adrian', 44);
// // console.log('this.name', me.name);
// // console.log('this.age', me.age);
// var description = me.getUserDescription();
// console.log(description);
