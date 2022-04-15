/* 1. Create an object that has properties
 "username" and "password". Fill those values in with strings.
*/
var user={
    username: "nuroye", 
    password: "nuftech2022", 
    status: "active" 
}


/* 2. Create an array which contains the object you have made 
above and name the array "database".*/

var database =[
    {
        username: "nuroye", 
        password: "nuftech2022", 
        status: "active" 
    },
    {
        username: "omoh", 
        password: "omoh2022", 
        status: "online"
    },
    {
        username: "ajay", 
        password: "ajay2022", 
        status: "done" 
    },
    {
        username: "tully", 
        password: "tully2022", 
        status: "open"
    },

    {
        username: "akin", 
        password: "akin2022", 
        status: "confirmed"
    },


    {
        username: "nuroye",
        password: "nuftech2022",
        status:"active"
    }

]


/*3. Accept username, password & status from the prompt 
and add it to the database array */

//accept input from user
var userName=prompt("Please Enter Username");
var password=  prompt("Please Enter Password")
var status=prompt("Please Enter Status")

//add new user to the database
database.push({
    username: userName,
    password:password,
    status:status
})
 console.log(database);

function signinForEach(username, password){
    var result="";
    database.forEach(function(user){
        if (user.password === password && user.username === username){
        console.log("Your username is" + username + "Your password is" + password );
            return
        }
        else{
            console.log("Sorry, wrong username and password");
        
        }
    })
        return result;
}


function signInForLoop(username, password){
    for(var i=0; i < database.length; i++){
        if(username === database[i].username && 
            password === database[i].password)
           {
                result =username + "You are logged in !!!";
                break;

            }
    }
        return result
}


var result = signInForEach(userName, password);

if(result !== ""){
    console.log(result)
}
else{
    console.log("Sorry your username or password is invalid");
}