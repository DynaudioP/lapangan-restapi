const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    namaBarang: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    harga: {
        type: Number,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    tipeBarang: {
        type: String,
        required: true,
        enum: ['Sepatu', 'Baju', 'Bola', 'Lainnya'], 
    },
    namaToko: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Store', StoreSchema);
