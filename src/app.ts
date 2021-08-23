import express from 'express';
import cors from 'cors';
import router from './infrastructure/routes/routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1', router);

export default app;
