// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    db.collection('tasks').deleteOne({
        _id: new ObjectID("5e700778f1fb0a0e2d3a9818")
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
  }
);
    //     db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5e6ee051f0dbc4d48d1da7a2")
    //     },
    //     {
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

// db.collection('users').findOne({_id: new ObjectID("5e6eb3739c92b6c2c4a23903")}, (error, user) => {
//     if(error){
//         return console.log('Unable to fetch')
//     }

//     console.log(user)
// })

// db.collection('users').find({ age: 27}).toArray((error, users) => {
//     console.log(users)
// })

// db.collection('users').find({ age: 27}).count((error, count) => {
//     console.log(count)
// })

// db.collection('tasks').findOne({_id: new ObjectID("5e700778f1fb0a0e2d3a9818")}, (error, task) => {
// if(error){
//     return console.log('Unable to fetch')
// }

// console.log(task)
// })

// db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
// console.log(tasks)
// })
