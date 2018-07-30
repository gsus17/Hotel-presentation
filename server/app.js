import express from 'express';
import {
  hotels
} from './routes';
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type,Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE,OPTION')
    next()
  })
}

app.use('/api/hotels', hotels)

export default app;
