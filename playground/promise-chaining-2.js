require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e73f7337046a13b332cf647', { completed: false}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })



const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:true})
    return count
}

deleteTaskAndCount('5e73f9537f84a23beb538621').then((count) => {
    console.log(count)
})