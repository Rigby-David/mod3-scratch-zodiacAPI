const { Router } = require('express');
const router = Router();
const { horoscopes } = require('../../data/horoscopes.js');

router
  .get('/:sign', (req, res) => {
    const horoscope = horoscopes.find((horoscope) => horoscope.sign === req.params.sign);
    
    res.json(horoscope);
  })
  .get('/', (req, res) => {
    const signs = horoscopes.map((horoscope) => ({ id: horoscope.id, sign: horoscope.sign, horoscope: horoscope.horoscope }));
    res.json(signs);
  });
  
module.exports = router;
