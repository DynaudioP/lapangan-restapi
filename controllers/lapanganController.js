const Lapangan = require('../models/Lapangan');

// Get All
exports.getAllLapangan = async (req, res) => {
  const lapangan = await Lapangan.find();
  res.json(lapangan);
};

// Get By Id
exports.getLapanganById = async (req, res) => {
  try {
    const { id } = req.params;
    const lapangan = await Lapangan.findById(id);

    if (!lapangan) {
      return res.status(404).json({ message: 'Lapangan tidak ditemukan' });
    }

    res.status(200).json(lapangan);
  } catch (error) {
    res.status(404).json({ message: 'Server Error', error: error.message });
  }
};

// Create
exports.createLapangan = async (req, res) => {
  const newLapangan = new Lapangan(req.body);
  await newLapangan.save();
  res.status(201).json(newLapangan);
};

// Update
exports.updateLapangan = async (req, res) => {
  const lapangan = await Lapangan.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lapangan);
};

// Delete
exports.deleteLapangan = async (req, res) => {
  await Lapangan.findByIdAndDelete(req.params.id);
  res.json({ message: 'Lapangan Deleted' });
};
