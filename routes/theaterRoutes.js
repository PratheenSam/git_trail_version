const express = require('express');
const router = express.Router();
const { Theater } = require('../models');

// Get all theaters
router.get('/', async (req, res) => {
  try {
    const theaters = await Theater.findAll();
    res.status(200).json(theaters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new theater
router.post('/', async (req, res) => {
  try {
    const theater = await Theater.create(req.body);
    res.status(201).json(theater);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;