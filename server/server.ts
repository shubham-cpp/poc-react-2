import express, { Application } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import * as swaggerUI from 'swagger-ui-express';
import swaggerJSDoc, * as swaggerJsDoc from 'swagger-jsdoc';
import YAML from 'yamljs'


config();
const app: Application = express();
const PORT = process.env.PORT || 4001;
const DB_URI = process.env.DB_ONLINE || '';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Admission API',
      version: '1.0.0',
      description: 'An API to get info about school admission',
    },
    servers: [
      {
        url: 'http://localhost:' + PORT,
      },
    ],
  },
  apis: ['src\\routes\\*.ts'],
};

// const specs = swaggerJSDoc(options)  // YAML.load('src/misc/api-info.yaml')
const specs = YAML.load('api-info.yaml')

// Body parsing Middleware
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/admissions', require('./src/routes/admission'));
app.use('/api/docs',swaggerUI.serve,swaggerUI.setup(specs))

// page not found
app.get('/*', (_, res) => {
  res.status(404).send('404 page not found');
});

connect(DB_URI).then(() => {
  console.log('Connected to database(online)');
  try {
    app.listen(PORT, (): void => {
      console.log(`Connected successfully on port ${PORT}`);
    });
// console.log(YAML.load('src/misc/api-info.yaml'))
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
});
