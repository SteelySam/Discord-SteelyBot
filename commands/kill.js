module.exports = {
	name: 'kill',
	description: 'killer',
	execute(message, args) {
		if (!message.mentions.users.size){
            return message.channel.send(`${message.author} kermits not alive...`)
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`${message.author}:knife: kills ${taggedUser}:sweat_drops:`)
	},
};