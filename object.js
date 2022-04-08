// Create an object and an array which we will use in our facebook exercise. 

/* 1. Create an object that has properties
 "username" and "password". Fill those values in with strings.
*/
var nuf={
    username: "nuroye",
    password: "nuftech2022"
}
console.log(nuf);

/* 2. Create an array which contains the object you have 
made above and name the array "database".
*/

var database=[{nuf}]
console.log(database);


/* 3. Create an array called "newsfeed" which contains 
3 objects with properties "username" and "timeline".
*/
var news1={
    username:"nuroye",
    timeline: "Identify the problemm"
}
console.log(news1);

var news2={
    username: "nuf",
    timeline: "Analyze the problem"
}
console.log(news2);
var news3={
    username: "nure",
    timeline:  "Find a solution"
}
console.log(news3);

var newsfeed=[
    {news1},{news2},{news3}

]
console.log(newsfeed);