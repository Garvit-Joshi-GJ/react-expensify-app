// Object destructuring..

// const person ={
//     name:'Garvit',
//     age:23,
//     location:{
//         city:'Nainital',
//         temp:12
//     }
// };

// const {name:firstName = 'Anonymus',age, location}=person;
// const {city, temp:temprature}=location;
// console.log(`${firstName} is ${age}...  ${temprature}` )


// const book= {
//     title:'Ego is the Enemy',
//     author: 'Rayan Holiday',
//     publisher:{
//         name:'Penguine'
//     }
// }

// const {name:publisherName = 'Self-Published'}=book.publisher;
// console.log(publisherName)

//
//
//
//

// Array Destrucuring

const address=[ '1299 S Juniper Street','Philadelphia','Penslayvania'];

const [,city,state,zip='XXXX']= address
console.log(`You are in ${city} ${state} ${zip}`)
