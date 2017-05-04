const TG = require('telegram-node-bot');
const key = require('./config/key.js');

//const InlineModeController = require('./controller/inlineModeController.js');
const BotController = require('./controller/botController.js');
const OtherwiseController = require('./controller/otherwiseController.js');

const chatbot = new TG.Telegram(key, {workers: 1});
chatbot.router
	.when(
		new TG.RegexpCommand(/([0-9]{3})/, 'status'), new BotController()
	)
	.when(
		new TG.TextCommand('/start', 'hello'), new BotController()
	)
	//.inlineQuery(new InlineModeController())
	.otherwise(
		new OtherwiseController()
	)

