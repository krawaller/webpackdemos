var users = require("./users");

var _ = require("lodash");

var combinedage = _.reduce(users,function(mem,u){
	return mem + u.age;
},0);

console.log("The combined age of our users is",combinedage)