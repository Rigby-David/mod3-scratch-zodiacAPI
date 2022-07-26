const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs.js');
const router = Router();

router
  .get('/:id', (req, res) => {
    // .find(zodiac) by id and set it equal to req.params.id
    const zodiac = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiac);
  })
  .get('/', (req, res) => {
    const ids = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name }));
    res.json(ids);
  });
module.exports = router;
