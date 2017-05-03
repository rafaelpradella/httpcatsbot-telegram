const TG = require('telegram-node-bot');
const TelegramBaseController = TG.TelegramBaseController;
const msg = require('../config/msg.js');

class OtherwiseController extends TelegramBaseController {
    handle(scope) {
		scope.sendMessage(msg.wrongRoute);
    }
}

module.exports = OtherwiseController;