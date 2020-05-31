import * as firebase from 'firebase';  // the * takes all the named export by firebase lib and dumps it into the word firebase



// HARDCODDED TESTING
// const firebaseConfig = {
//     apiKey: "AIzaSyBcE7_xwR0l5uRs1-PZjl5aJvgN6G-uMpI",
//     authDomain:"expensify-test-5bec0.firebaseapp.com",
//     databaseURL: "https://expensify-test-5bec0.firebaseio.com",
//     projectId: "expensify-test-5bec0",
//     storageBucket: "expensify-test-5bec0.appspot.com",
//     messagingSenderId:"383037528268"
   
//   };


// FIREBASE_API_KEY = AIzaSyBcE7_xwR0l5uRs1-PZjl5aJvgN6G-uMpI
// FIREBASE_AUTH_DOMAIN = expensify-test-5bec0.firebaseapp.com
// FIREBASE_DATABASE_URL = https://expensify-test-5bec0.firebaseio.com
// FIREBASE_PROJECT_ID = expensify-test-5bec0
// FIREBASE_STORAGE_BUCKET = expensify-test-5bec0.appspot.com
// FIREBASE_MESSAGING_SENDER_ID= 383037528268





// HARD CODDED PRODUCTION
const firebaseConfig = {
    apiKey: "AIzaSyC27XT59bKUe6qbC16rS0s6lhaYP0_nmuU",
    authDomain:"expensify-36bd0.firebaseapp.com",
    databaseURL: "https://expensify-36bd0.firebaseio.com",
    projectId: "expensify-36bd0",
    storageBucket: "expensify-36bd0.appspot.com",
    messagingSenderId:"1052714498213"
   
  };
  
//   FIREBASE_API_KEY = AIzaSyC27XT59bKUe6qbC16rS0s6lhaYP0_nmuU
// FIREBASE_AUTH_DOMAIN = expensify-36bd0.firebaseapp.com
// FIREBASE_DATABASE_URL = https://expensify-36bd0.firebaseio.com
// FIREBASE_PROJECT_ID = expensify-36bd0
// FIREBASE_STORAGE_BUCKET = expensify-36bd0.appspot.com
// FIREBASE_MESSAGING_SENDER_ID= 1052714498213

  // const firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain:process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
   
  // };

   // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database =  firebase.database();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase,googleAuthProvider,database as default};

// database.ref('expenses').push({
//   description:'Water rent',
//   note:'Water rent for August',
//   amount:1000,
//   createdAt:1000
// });
// database.ref('expenses').push({
//   description:'House rent',
//   note:'House rent for August',
//   amount:2000,
//   createdAt:2000
// });
// database.ref('expenses').push({
//   description:'Phone Bill',
//   note:'Phone for August',
//   amount:3000,
//   createdAt:3000
// });
  
// ** child Removed

// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// ** child_Changed

// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });

// //** child Added  // runs for all the values in DB

// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//   const expenses =[];
//   snapshot.forEach(element => {
 
//     expenses.push({
//       id:element.key,
//       ...element.val()
//     })
//   });
//   console.log('once'+expenses);
// })

 
// database.ref().on('value',(snapshot)=>{

// const expenses =[];
//   snapshot.forEach(element => {
 
//     expenses.push({
//       id:element.key,
//       ...element.val()
//     })
//   });
//   console.log('on'+expenses);
// })




// database.ref('notes/-M5qaWEAklezLsZASd8N').remove()
// database.ref('notes').push({
//   title:'Course Topics',
//   body:'java, JS, Angular'
// })




  //   const firebaseNotes = {
  //     notes:{
  //       12:{
  //         title:'First Note',
  //         body:'This is my note'
  //       },
  //       cbvnbnm:{
  //         title:'Another Note',
  //         body:'This is my note'
  //       }
  //     }
  //   }

  //   const notes = [
  //     {
  //     id :'12',
  //     title:'First Note',
  //     body:'This is my note'
  //    },
  //    {
  //     id :'1231',
  //     title:'Another Note',
  //     body:'This is my note'
  //   },
    
  // ]
  
  // database.ref('firebaseNotes').set(firebaseNotes);
  
  // database.ref('notes').set(notes);
  // database.ref('notes/12');  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   // const datatbase =  firebase.database();
  //   datatbase.ref().set({
  //      name:'Garvit Joshi',
  //      age:24,
  //      stressLevel:6,
  //      job:{
  //        title:'Software Developer',
  //        company:'Google'
  //      },
  //      location:{
  //          city:'Ramnagar',
  //          country:'India'
  //      },
  //      array:['sav','hgs']
    
  //  }).then(()=>{
  //    console.log('Data is Saved');
  //  }).catch((e)=>{
  //    console.log('DATA NOT SAVED'+e)
  //  })

  //  datatbase.ref().update({
  //    stressLevel:8,
  //    'job/company':'Amazon',
  //    'location/city':'Banglore'
  //  });

  //   const onValueChange= datatbase.ref().on('value',(snapshot)=>{
  //     const val = snapshot.val();
  //     const name = snapshot.val().name;
  //     const desg =  snapshot.val().job.title;
  //     const company =  snapshot.val().job.company;

  //     //console.log(name+'is a '+desg+'at '+company);
  //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  //   },(e)=>{
  //     console.log('Error in data fetching');
  //   })
 
  //   setTimeout(()=>{
  //     datatbase.ref('age').set(27);
 
  //   },3500);

    
  //   setTimeout(()=>{
  //     datatbase.ref().off();
  //   },7500);
    

  //   setTimeout(()=>{
  //     datatbase.ref('age').set(30);
 
  //   },10500);
    // datatbase.ref('location/city')
    // .once('value')
    // .then((snapshot)=>{
    //   const val= snapshot.val();
    //   console.log(val);
    // }).catch((e)=>{
    //   console.log('error reading '+e)
    // })


  // datatbase.ref('isSingle').set(null)  // alernative for remove method


  //  datatbase.ref().remove().then(()=>{
  //   console.log('Data is removed');
  // }).catch((e)=>{
  //   console.log('NOT Removed'+e)
  // })

//    datatbase.ref().set("Thsi is my data")
// datatbase.ref('age').set(25)
// datatbase.ref('location/city').set('Nainital')



// datatbase.ref('attributes').set({
//     height:173,
//     weight:77  
//   }).then(()=>{
//     console.log('Second Data is Saved');
//   }).catch((e)=>{
//     console.log('DATA NOT SAVED'+e)
//   })
