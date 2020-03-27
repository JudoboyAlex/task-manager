require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e718d6f56be6803547145a6

// User.findByIdAndUpdate('5e72d1317a87a91a0b7d9e79', { age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e72d1317a87a91a0b7d9e79', 2).then((count) => {
    console.log(count)
})