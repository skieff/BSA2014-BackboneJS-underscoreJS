var express = require('express'),
	app = express(),
	filmService = require('./filmService');

app.get('/api/filmlist', function (req, res) {
	res.send(filmService.getFilmList());
});

app.get('/api/filmdetails', function (req, res) {
	res.send(filmService.getFilm(req.query.name));
});

app.get('/', function(req, res){
	var text = [
		'<b>localhost:3000/api/filmlist</b>',
		'returns the list of films available',
		'<br />',
		'<b>localhost:3000/api/filmdetails?name=%filmname%</b>',
		'where <b>%filmname%</b> is a name of the film from the filmlist'];
	res.send(text.join('<br />'));

});

app.listen(3000);
console.log('Server started on port 3000');