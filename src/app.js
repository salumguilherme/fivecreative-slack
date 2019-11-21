const express = require('express');
const app = express();
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser');
const helmet = require('helmet');
const http = require('http');
const server = http.createServer(app);

const eventsController = require('./routes/events/controller');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.set('port', 3010);

router.use('/events', eventsController);

app.use('/', router);

app.get('/', async (req, res) => {
    res.status(200).send("OK");
});

server.listen(3010, 'localhost');

server.on('listening', function () {
	console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
	
module.exports = app;