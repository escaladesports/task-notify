'use strict'
module.exports = str => {
	const notifier = require('node-notifier')
	console.log(str)
	notifier.notify({
		title: 'Notification',
		message: str
	})
}