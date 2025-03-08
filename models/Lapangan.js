const mongoose = require('mongoose');

const LapanganSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  alamat: { type: String, required: true },
  harga: [
    {
      pagi: Number,
      malam: Number,
    }
  ],
  fasilitas: [String],
  jam: [
    {
      buka: String,
      tutup: String,
    }
  ],
  gambar: {
    type: String,
    required: true,
  }
  
}, { timestamps: true });

module.exports = mongoose.model('Lapangan', LapanganSchema);
