const express = require('express');
const router = express.Router();
const {
  getAllLapangan,
  createLapangan,
  updateLapangan,
  deleteLapangan,
  getLapanganById,
} = require('../controllers/lapanganController');

router.get('/', getAllLapangan);
router.post('/', createLapangan);
router.get('/:id', getLapanganById);
router.put('/:id', updateLapangan);
router.delete('/:id', deleteLapangan);

module.exports = router;
