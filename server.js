import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import eventsController from './src/routes/events/controller';

const app = express();
const router = express.Router();
const server = http.createServer(app);

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
server.on('listening', () => {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
})

export default app;