import express, { Application, Response } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config();
const app: Application = express();
const PORT = process.env.PORT || 4001;
const DB_URI = process.env.DB_URI || '';

// Body parsing Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  '/',
  async (_, res: Response): Promise<Response> =>
    res.status(200).send({
      message: 'Hello World!',
    })
);
app.use('/api/admissions', require('./src/routes/admission'));
connect(DB_URI).then(() => {
  console.log('Connected to database');
  try {
    app.listen(PORT, (): void => {
      console.log(`Connected successfully on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
});
