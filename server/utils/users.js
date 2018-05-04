// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor () {
        this.users = [];
        this.rooms = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        if (id && name && room){
            if (!this.getRoom(room)) {
                this.rooms.push({room});
            }
        }
        return user;
    }
    removeUser (id) {
        var user = this.getUser(id);

        if (user){
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
    getRoom (roomName) {
        return this.rooms.filter((room) => room.room === roomName)[0];
        // users.map((user) => user.name);
    }
    getRoomList () {
        return this.rooms;
    }
}

module.exports = {Users};

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Sikeat', 23);
// var desciption = me.getUserDescription();
// console.log(desciption);