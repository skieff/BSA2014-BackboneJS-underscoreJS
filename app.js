var express = require('express'),
	app = express(),
	filmService = require('./filmService');

app.use(express.static(__dirname + '/public'));

app.get('/api/films', function (req, res) {
	res.send(filmService.getFilmList());
});

app.get('/api/film/:id', function (req, res) {
	var film = filmService.getFilmList(req.params.id);
	if (film){
		res.send(film);
	} else {
		res.send('No film with id ' + req.params.id);
	}
});

app.delete('/api/film/:id', function (req, res) {
	var film = filmService.deleteFilm(req.params.id);
	res.end();
});

app.put('/api/film/:id', function (req, res) {
	var film = filmService.addFilm(req.params.id);
	res.end();
});

app.get('/api/filmdetails', function (req, res) {
	res.send(filmService.getFilm(req.query.name));
});

app.get('/', function(req, res){
	var text = [
		'<b>localhost:3000/api/films</b>',
		'returns the list of films available',
		'<br />',
		'<b>localhost:3000/api/film/%id%</b>',
		'where %id% is id of the film from the list',
		'<br />',
		'<b>localhost:3000/api/filmdetails?name=%filmname%</b>',
		'where <b>%filmname%</b> is a name of the film from the filmlist',
		'<br />',
		'<b>localhost:3000/app</b>',
		'this is the root of your web app'];
	res.send(text.join('<br />'));

});

app.listen(3000);
console.log('Server started on port 3000. Go to localhost:3000 for further instructions');