const Store = require('../models/Store');

// Get All Store
exports.getAllStore = async (req, res) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get Store By Id
exports.getStoreById = async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);
        if (!store) {
            return res.status(404).json({ message: 'Store tidak ditemukan' });
        }
        res.status(200).json(store);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Create Store
exports.createStore = async (req, res) => {
    try {
        const store = new Store(req.body);
        await store.save();
        res.status(201).json(store);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Update Store
exports.updateStore = async (req, res) => {
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!store) {
            return res.status(404).json({ message: 'Store tidak ditemukan' });
        }
        res.status(200).json(store);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Delete Store
exports.deleteStore = async (req, res) => {
    try {
        const store = await Store.findByIdAndDelete(req.params.id);
        if (!store) {
            return res.status(404).json({ message: 'Store tidak ditemukan' });
        }
        res.status(200).json({ message: 'Store berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
