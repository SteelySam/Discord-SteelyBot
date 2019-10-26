const fs = require(`fs`);
const Discord = require('discord.js');
const eco = require("discord-economy");
const { prefix, token, currency} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`SteelyBot is online!`);
})

client.on('message', async message => {
    const args = message.content.slice(prefix.length).split(` `);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
    		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!message.content.startsWith(prefix) || message.author.bot || !command) return;

    if (command.args && !args.length){
        return message.channel.search(`You didn't provide any arguments`);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`there was an error with the command`);
    }
})

client.login(token);