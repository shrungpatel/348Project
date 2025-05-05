const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  }
});

productSchema.index({ storeName: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;