const eco = require("discord-economy");
const {prefix, token, currency} = require("../config.json");

module.exports = {
    name: 'craps',
    cooldown: '5',
	description: 'Gamble on a dice roll',
	async execute(message, args) {
        var roll1 = Math.floor((Math.random() * 6) + 1);
        var roll2 = Math.floor((Math.random() * 6) + 1);
        var result = roll1+roll2;
        var outcome = `The dice rolled ${roll1} and ${roll2}`;
        var amount = args[0];

        //TODO: Needs a point save and currency change

        if (!amount) return message.reply('Specify the amount you want to gamble!')

        if(result==2)
        {
            message.reply(`${outcome} Snake Eyes you lose`)
        }
        else if(result==3 || result==12)
        {
            message.reply(`${outcome} You lose`)
        }
        else if(result==7 || result==11)
        {
            message.reply(`${outcome} You win`)
        }
        else
        {
            message.reply(`${outcome}\n **${result}** is your point.`)
        }
	},
};