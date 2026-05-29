import express from 'express';
import articleRoute from './routes/articleRoute.js';
import logger from './middleware/logger.js';

const app = express();

app.use(express.json());
app.use(logger);
app.use('/articles', articleRoute);

export default app;