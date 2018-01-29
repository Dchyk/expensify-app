import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

// Set up a new Google authorization provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed

// // database.ref('expenses').on('child_removed', (snapshot) => {
// //   console.log(snapshot.key, snapshot.val());
// // });

// // child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapShot) => {
// //       expenses.push({
// //         id: childSnapShot.key,
// //         ...childSnapShot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   }, (e) => {
// //     console.log('There was an error: ', e);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapShot) => {
// //       expenses.push({
// //         id: childSnapShot.key,
// //         ...childSnapShot.val()
// //       });
// //     });

// //     console.log(expenses)
// //   });

// // expenses.push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 800,
// //   createdAt: 0
// // });

// // database.ref('notes').push({
// //   title: 'Course TOpics',
// //   body: 'React, Angular, Python'
// // });

// // database.ref('notes/-L3YsT8I3kHs0FA1WjYM').remove();

// // database.ref('notes').set(notes);

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   let name = snapshot.val().name;
// //   let job = snapshot.val().job;
// //   console.log(`${name} is a ${job.title} at ${job.company}`);
// // }, (e) => {
// //   console.log('Error with data fetching', e)
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e)
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off();
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);


// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Alex D',
// //   age: 34,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Portland',
// //     country: 'United States'
// //   },
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e)
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });
