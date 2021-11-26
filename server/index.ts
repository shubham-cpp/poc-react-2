import express, { Application, Response } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config();
const app: Application = express();
const PORT = process.env.PORT || 4001;
const DB_URI = process.env.DB_URI || '';

// Body parsing Middleware
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// app.get(
//   '/',
//   async (_, res: Response): Promise<Response> =>
//     res.status(200).send({
//       message: 'Hello World!',
//     })
// );
app.use('/api/admissions', require('./src/routes/admission'));

// page not found
app.get('/*', (_, res) => {
  res.status(404).send('404 page not found');
});

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
