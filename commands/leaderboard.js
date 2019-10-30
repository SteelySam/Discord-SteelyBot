const eco = require("discord-economy");
const {prefix, token, currency} = require("../config.json");
const client = require("../index.js");

module.exports = {
	name: 'leaderboard',
	aliases: ['rank'],
	cooldown: '5',
	description: 'Check your ranking',
	async execute(message, args) {
        if (message.mentions.users.first()) {
            var output = await eco.Leaderboard({
                filter: x => x.balance > 50,
                search: message.mentions.users.first().id
            })
            message.channel.send(`The user ${message.mentions.users.first()} is number ${output} on the leaderboard!`);
        } else{
            var aut
            var output = await eco.Leaderboard({
                filter: x => x.balance > 50,
                search: message.author.id
            })
            message.channel.send(`The user ${message.author} is number ${output} on the leaderboard!`);
        }
    }
};