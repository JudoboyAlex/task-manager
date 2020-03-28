const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})




// const task = new Task({
//     description: "Judo",
//     completed: false,
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(() => {
//     console.log('Error');
// })