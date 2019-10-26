const eco = require("discord-economy");
const {prefix, token, currency} = require("../config.json");

module.exports = {
	name: 'daily',
	description: 'Daily!',
	async execute(message, args) {
		var output = await eco.Daily(message.author.id)
		//output.updated will tell you if the user already claimed his/her daily yes or no.
		 
		if (output.updated) {
			var profile = await eco.AddToBalance(message.author.id, 1000)
			message.reply(`You claimed your daily ${currency} successfully! You now own ${profile.newbalance} ${currency}.`)
		} else {
			message.channel.send(`Sorry, you already claimed your daily ${currency}!\nDaily resets in ${output.timetowait}`)
		}
	},
};