// //importing modules
// const {Sequelize, DataTypes} = require('sequelize')

// //Database connection with dialect of postgres specifying the database we are using
// //port for my database is 5433
// //database name is discover
// const sequelize = new Sequelize(`postgres://postgres:Letsdoit!@localhost:5433/RegisterandLogin`, {dialect: "postgres"})

// //checking if connection is done
//     sequelize.authenticate().then(() => {
//         console.log(`Database connected to discover`)
//     }).catch((err) => {
//         console.log(err)
//     })

//     const db = {}
//     db.Sequelize = Sequelize
//     db.sequelize = sequelize

// //connecting to model
// db.users = require('./userModels') (sequelize, DataTypes)

// //exporting the module
// module.exports = db