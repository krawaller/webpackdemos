var users = require("./users");

var reduce = require("lodash/reduce");

var combinedage = reduce(users,function(mem,u){
	return mem + u.age;
},0);

console.log("The combined age of our users is",combinedage)