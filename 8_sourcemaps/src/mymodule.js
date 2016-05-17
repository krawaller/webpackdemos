module.exports = {
	foo: function(){
		return "bar"
	},
	baz: "bin",
	gonnathrow: function(){
		console.log("I warned you!")
		throw new Error("OMG catastrophic error!")
	}
}