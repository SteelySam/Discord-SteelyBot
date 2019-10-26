module.exports = {
	name: 'kill',
	cooldown: '5',
	description: 'sometimes things gotta die',
	execute(message, args) {
		if (!message.mentions.users.size){
            return message.channel.send(`${message.author} kermits not alive...`)
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`${message.author}:knife: kills ${taggedUser}:sweat_drops:`)
	},
};