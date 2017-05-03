const TG = require('telegram-node-bot');
const TelegramBaseInlineQueryController = TG.TelegramBaseInlineQueryController;

class InlineModeController extends TelegramBaseInlineQueryController {
   handle($) {
        let query = $.inlineQuery.query;
		let queryFirstThree = query.substr(0,3) || undefined;
		let results = [];

		if (query && query.length >= 3 && !isNaN(queryFirstThree)){
			results.push({
				type: 'image',
				id: queryFirstThree,
				photo_url: `https://http.cat/images/${queryFirstThree}`,
				thumb_url: `https://http.cat/images/${queryFirstThree}`
			});
		} else {
			let results = [];
		}
        
		TG.answerInlineQuery($.id, results);
    }
};

module.exports = InlineModeController;