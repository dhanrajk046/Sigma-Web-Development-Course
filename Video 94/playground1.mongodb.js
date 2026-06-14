/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('useSigmaDB');

// Insert comments into courses collection.
db.getCollection('sales').insertMany([
  {
  "courses": [
    {
      "name": "Java",
      "price": 20000,
      "instructor": "Harry"
    },
    {
      "name": "Python",
      "price": 18000,
      "instructor": "Angela Yu"
    },
    {
      "name": "JavaScript",
      "price": 15000,
      "instructor": "Hitesh Choudhary"
    },
    {
      "name": "React",
      "price": 12000,
      "instructor": "Akshay Saini"
    },
    {
      "name": "Node.js",
      "price": 14000,
      "instructor": "Harry"
    },
    {
      "name": "MongoDB",
      "price": 10000,
      "instructor": "Maximilian Schwarzmüller"
    },
    {
      "name": "Data Structures",
      "price": 22000,
      "instructor": "Love Babbar"
    },
    {
      "name": "System Design",
      "price": 30000,
      "instructor": "Gaurav Sen"
    },
    {
      "name": "Machine Learning",
      "price": 35000,
      "instructor": "Andrew Ng"
    },
    {
      "name": "Full Stack Development",
      "price": 40000,
      "instructor": "Angela Yu"
    }
  ]
}
]);


// Print a message to the es occurred in 2014output window.
console.log(`Done inserting the Data`);
