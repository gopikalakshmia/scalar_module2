var ruru={
    firstname:"Rudra",
    lastname:"Nair",
    age:1.5,
    parents:["Vishnu","Lakshmi"],
    address:{
        state:"arizona",
        apartment:{
            name:"pavillion",
            street:"7400 arrowhead"
        }
    }
}

console.log(ruru);
console.log(ruru.firstname);
console.log(ruru.parents);
//obj inside obj
console.log(ruru.address.apartment.name);
//adding new property
ruru.middilename="Lakshmi";
console.log(ruru);
//changing value of a key -value pair
ruru.age=1.6;
console.log(ruru);

//deleting a key value pair
delete ruru.age;
console.log(ruru);
