import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderItems: [
    {
      name: String,
      qty: Number,
      image: String,
      price: Number,
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    }
  ],
  shippingAddress: String,
  paymentMethod: String,
  totalPrice: Number,
  isPaid: { type: Boolean, default: false },
  paidAt: Date
});

const Order = mongoose.model('Order', orderSchema);
export default Order;