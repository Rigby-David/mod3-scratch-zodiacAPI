const { Router } = require('express');
const router = Router();
const fetch = require('cross-fetch');

router
  .get('/', async (req, res) => {
    const data = await fetch('https://ohmanda.com/api/horoscope/virgo/');
    const horoscopeAPI = await data.json();
    res.send(horoscopeAPI);
  });

module.exports = router;
