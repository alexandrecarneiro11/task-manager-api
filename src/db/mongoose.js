const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true, // thats will make sure that when mongoose works with mongodb creation of indexes allowing properly connect to data
    useFindAndModify: false
    
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         trim: true,
//         validate(value){
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }

//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }

//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positve number')
//             }
//         }
//     }
// })

// const me = new User({
//    name: '     Jose    ',
//    password: 'Pasdfsdword123',
//    email: '   myemail@BMAIL.COM'
// })

// me.save().then(() => {
//     console.log(me)

// }).catch((error) => {
//     console.log('error!', error)
// })
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
        
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: '    Eat food',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error', error)
// })

// comando to start mongodb service
// c:/users/alexandrecarneiro/mongodb/bin/mongod.exe --dbpath=c:/users/alexandrecarneiro/mongodb-data