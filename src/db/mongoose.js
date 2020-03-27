const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api-next',{
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