module.exports = {
	name: 'pat',
	cooldown: '5',
	description: 'pats',
	execute(message, args) {
		if (!message.mentions.users.size){
            return message.channel.send(`${message.author} gently pats SteelyBot`)
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`${message.author} pats ${taggedUser}`)
	},
};