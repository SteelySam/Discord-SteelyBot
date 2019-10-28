const eco = require("discord-economy");
const {prefix, token, currency} = require("../config.json");

const spin = "<a:coinflip:436677458339823636>";

module.exports = {
        name: 'coinflip',
        aliases: [`cf`],
        cooldown: '5',
        description: 'Gamble on a coin flip',
        async execute(message, args) {
                var flip = args[0];     //Heads or Tails
                var amount = args[1];   //Coins to gamble
                var bet = 1;
                var arg1 = args[0];
                var goldTotal = await eco.FetchBalance(message.author.id)
                
                if(!isNaN(arg1)){
                        bet = parseInt(arg1);
                        arg1 = args[1];
                }else if(arg1&&arg1.toLowerCase()=='all'){
                        bet = "all";
                        arg1 = args[1];
                }else if(!isNaN(args[1])){
                        bet = parseInt(args[1]);
                }else if(args[1]&&args[1].toLowerCase()=='all'){
                        bet = "all";
                }else if(args.length!=1){
                message.channel.send("**🚫 | "+message.author.username+"**, Invalid arguments!!");
                return;
                }

                var choice = 'h';
		if(arg1!=undefined)
                        arg1 = arg1.toLowerCase();
		if(arg1=='heads'||arg1=='h'||arg1=='head')
			choice = 'h';
		else if(arg1=='tails'||arg1=='t'||arg1=='tail')
                        choice = 't';
                
                if(bet==0){
                        message.reply("**🚫 | "+message.author.username+"**, You can't bet 0 dum dum!");
                        return;
                }else if(bet<0){
                        message.reply(`**🚫 | `+message.author.username+`**, Do you understand how to bet ${currency}???`);
                         return;
                }else if(choice==undefined){
                        message.reply("**🚫 | "+message.author.username+"**, You must choose either `heads` or `tails`!");
                         return;
                }

                if(bet=="all"){
                        bet = goldTotal.balance
                }
		var rand = Math.random();
                var win = false;
                
		//tails
		if(rand>.5&&choice=="t")
			win = true;
		//heads
		else if(rand<.5&&choice=="h")
			win = true;

                var text = `${message.author} spent ${bet} on ${choice}`
		var text2 = text;
		text2 += "\nThe coin spins... and you ";
                if(win){
                        text2 += `won **${currency}**!!`;
                        eco.AddToBalance(message.author.id, bet)
                }
		else{
                        text2 += `lost it all... :c`;
                        eco.SubtractFromBalance(message.author.id, bet)
                }
		        
		text += `\nThe coin spins... :white_circle:`;

				

		message.channel.send(text)
		        .then(message => setTimeout(function(){
			        message.edit(text2)
			                .catch(err => console.error(err));
			},2000))
		        .catch(err => console.error(err));
                
                /*
                //if (!flip || !['heads', 'tails'].includes(flip)) return message.reply('Please specify the flip, either heads or tails!')
                //if (!amount) return message.reply('Specify the amount you want to gamble!')
                var output = await eco.FetchBalance(message.author.id)
                if (output.balance < amount) return message.reply(`You have fewer ${currency} than the amount you want to gamble!`)
                var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
                message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
                */
        },
};