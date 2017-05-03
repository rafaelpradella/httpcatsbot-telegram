const TG = require('telegram-node-bot');
const TelegramBaseController = TG.TelegramBaseController;
const msg = require('../config/msg.js');
const request = require('request');

class BotController extends TelegramBaseController {
	
	statusAction(scope){
		let statusNumber = scope.message.text.substr(0,3);
		let imgUrl = `https://http.cat/images/${statusNumber}`;
		request(imgUrl, function(error, response){
			if(response && response.statusCode == "200"){
				scope.sendPhoto({ url: imgUrl });
			} else {
				scope.sendMessage(msg.badRequest);
			}
		});
	}

	helloAction(scope){
		scope.sendMessage(msg.hello);
	}

	get routes(){
		return{
			'status': 'statusAction',
			'hello': 'helloAction'
		}
	} 
};

module.exports = BotController;