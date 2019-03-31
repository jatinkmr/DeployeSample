const app = require('expree')();

let PORT = process.env.PORT || 4444;

app.get('/', (req, res) => {
	res.send('Hello From Heroku Devlopment Projects');
});

app.listen(PORT);