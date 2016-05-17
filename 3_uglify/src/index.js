var capitalize = require('lodash/capitalize');

var bard = {
	describe: function(amount){
		switch(amount){
			case 1: return "1 bottle of beer";
			case 0: return "no more bottles of beer";
			default: return amount+" bottles of beer"
		}
	},
	action: function(amount){
		switch(amount){
			case 1: return "Take it down and pass it around";
			case 0: return "Go to the store and get some more";
			default: return "Take one down and pass it around"
		}
	},
	verse: function(amount){
		var ret = capitalize(this.describe(amount))+" on the wall, ";
		ret += this.describe(amount)+"! ";
		ret += this.action(amount)+", ";
		ret += this.describe(amount-1 > -1 ? amount-1 : 99);
		return ret;
	}
}

var lyrics = "";
	verses = 10;

for(var number = 10; number>-1; number--){
	lyrics += "<p>" + bard.verse(number) + "</p>";
}

document.getElementById("song").innerHTML = lyrics;

