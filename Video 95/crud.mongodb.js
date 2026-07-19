//CRUD Operations
// https://www.mongodb.com/docs/manual/crud/
use("CrudDb")

//create
// console.log(db)
// db.createCollection("courses")

// db.courses.insertOne({
//     name:"Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//   {
//     name: "Harrys Web Dev Free Course",
//     price: 0,
//     assignments: 12,
//     projects: 45
//   },
//   {
//     name: "Python for Beginners",
//     price: 499,
//     assignments: 20,
//     projects: 10
//   },
//   {
//     name: "Advanced JavaScript",
//     price: 999,
//     assignments: 15,
//     projects: 25
//   },
//   {
//     name: "MERN Stack Mastery",
//     price: 1999,
//     assignments: 30,
//     projects: 12
//   },
//   {
//     name: "Data Structures in C++",
//     price: 799,
//     assignments: 18,
//     projects: 8
//   },
//   {
//     name: "Machine Learning Basics",
//     price: 1499,
//     assignments: 22,
//     projects: 6
//   },
//   {
//     name: "React Complete Guide",
//     price: 899,
//     assignments: 16,
//     projects: 14
//   },
//   {
//     name: "Node.js Backend Development",
//     price: 1199,
//     assignments: 25,
//     projects: 9
//   },
//   {
//     name: "Excel Dashboard Creation",
//     price: 299,
//     assignments: 10,
//     projects: 5
//   },
//   {
//     name: "Power BI Analytics",
//     price: 699,
//     assignments: 14,
//     projects: 7
//   }
// ]);

//Read
// let a = db.courses.find({price:0})
// console.log(a.toArray())


// let b = db.courses.findOne({price:0})
// console.log(b)

//Update
// db.courses.updateOne({price:0}, {$set:{price:100}})

// db.courses.updateMany({price:0}, {$set:{price:100}})

//Delete 
// db.courses.deleteOne({price:100})


db.courses.deleteMany({price:999})

