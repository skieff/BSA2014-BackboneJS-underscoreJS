var express = require('express'),
	app = express(),
	calendar = require('./calendar');

app.get('/api/week', function (req, res) {
	res.send(calendar.getWeekEventsList());
});

app.get('/api/day', function (req, res) {
	res.send(calendar.getDay(req.query.day));
});

app.listen(3000);
console.log('Server started on port 3000');