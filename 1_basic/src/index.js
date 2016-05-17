var users = require("./users");

var combinedage = 0;

for(var name in users){
	combinedage += users[name].age;
}

console.log("The combined age of our users is",combinedage)