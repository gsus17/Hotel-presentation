import express from 'express';

// Import the json file with hotel list.
const hotelList = require('./hotels.json')

const app = express.Router();

app.get('/', (req, res) => res.status(200).send(hotelList))

app.get('/:searchText&:stars', (req, res) => {
  const searchText = req.params.searchText;
  const stars = req.params.stars;

  // Filter the new list.
  const filteredList = hotelList.filter(
    (hotel) => hotel.name.toLocaleLowerCase().indexOf(
      searchText.toLocaleLowerCase()) > -1 && stars.indexOf(0) > -1 ||
    hotel.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1 && stars.indexOf(hotel.stars) > -1);

  res.status(200).json(filteredList);
})

export default app;
