const eco = require("discord-economy");
const {prefix, token, currency} = require("../config.json");
const animalArray = [`:snail:`, `:crab:`, `:shark:`]
const animalValue = [1, 5, 10]

module.exports = {
	name: 'catch',
	cooldown: '5',
	description: 'Search for an animal',
	async execute(message, args) {
        var roll = Math.floor(Math.random() * 3);
        var caughtAnimal = animalArray[roll]
        var caughtValue = animalValue[roll]

        message.reply(`you caught a  ${caughtAnimal}  worth **${caughtValue} ${currency}**`)
        eco.AddToBalance(message.author.id, caughtValue)
	},
};