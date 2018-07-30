import * as hotelList from './hotels.json';
import express from 'express';

const app = express.Router();

const hotelGeneralList = hotelList;

app.get('/', (req, res) => res.status(200).json(hotelGeneralList))

export default app;
