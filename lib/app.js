const express = require('express');
const app = express();
const path = require('path');
// const port = 7890;


// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.use('/zodiacs', require('./controllers/zodiacs'));

app.use('/horoscopes', require('./controllers/horoscopes'));

app.use('/horoscopeAPIs', require('./controllers/horoscopeAPIs'));

// app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'));

// app.listen(port, () => console.log(`App listening on port ${port}!`));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
