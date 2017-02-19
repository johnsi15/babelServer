import express from 'express';

const app = express();

app.get('/', (req, res) =>{
  res.send(200, john.friendsList());
})

class Person{
  constructor(name, friends){
    this.name = name;
    this.friends = friends;
  }

  friendsList(){
    var str = `Mis amigos son: ${ this.friends.join(', ') }`;
    console.log(str); 
    return str;
  }
}

var john = new Person('John', ['andre', 'eduardo', 'loca'])

app.listen(3000);