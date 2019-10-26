const eco = require("discord-economy");
const {prefix, token, currency} = require("../config.json");

module.exports = {
	name: 'balance',
	aliases: ['cash'],
	cooldown: '5',
	description: 'Check your balance',
	async execute(message, args) {
        var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`${message.author}, you have ${output.balance} ${currency}.`)
	},
};