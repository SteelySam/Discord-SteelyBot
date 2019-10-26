module.exports = {
	name: 'dab',
	cooldown: '5',
	description: 'dab on all the haters',
	execute(message, args) {
        message.channel.send(`${message.author} dabs on the haters`)
	},
};