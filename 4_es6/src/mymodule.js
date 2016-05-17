const MyModule = {
	censor: (txt)=> txt.match(/swear/) ? 'I have a filthy mouth' : txt,
	superify: (o)=> {
		let powers = {flight: true, xrayvision: true, superstrength: true}
		return {...o, ...powers}
	}
}

export default MyModule;