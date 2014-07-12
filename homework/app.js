var express = require('express'),
	app = express(),
	filmService = require('./filmService');

app.get('/api/filmlist', function (req, res) {
	res.send(filmService.getFilmList());
});

app.get('/api/filmdetails', function (req, res) {
	res.send(filmService.getFilm(req.query.name));
});

app.listen(3000);
console.log('Server started on port 3000');