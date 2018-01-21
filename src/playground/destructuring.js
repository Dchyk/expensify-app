// const person = {
//   age: 35,
//   location: {
//     city: 'Baltimore',
//     temp: 40
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

// const { city, temp: temperature } = person.location;
// console.log()

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

// const address = ['2062 Rockrose Avenue', 'Baltimore', 'Maryland', '21211'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Black Coffee (hot)', '$2.00', '$7.50', '$2.75'];

const [selectedItem, ,cost] = item;

console.log(`A medium ${selectedItem} costs ${cost}`);