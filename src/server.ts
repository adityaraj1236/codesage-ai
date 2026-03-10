import express from 'express';
import cors from 'cors';
import { env } from './config/env.ts';
import { ChatGoogle } from "@langchain/google";
import reviewRoutes from './routes/reviewRoutes.ts';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health-check', (req: express.Request, res: express.Response) => {
    res.json({ status: 'OK' });
});

app.post('/code-review', reviewRoutes);
app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});
