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

database.push(login)

/*3. Accept username, password & status from the prompt 
and add it to the database array */

var userName=prompt("Please Enter Username");
var password=  prompt("Please Enter Password")
var status=prompt("Please Enter Status")


database.push({
    username: userName,
    password:password,
    status:status
})


function signinForEach(username, password){
    database.forEach(function(user){
        console.log(user)
        if (user.password === password && user.usename === username){
        console.log("Your username is" + user.username + "Your password is" + user.password );
            return
        }
        else{
            console.log("Sorry, wrong username and password");
        
        }
    })
}


function signInForLoop(username, password){
    for(var i=0; i < database.length; i++){
        if(username === database[i].username && 
            password === database[i].password)
           {
                console.log(username + "You are logged in !!!")
            }
    }

}

signinForEach("nuroye, nuftech2022");