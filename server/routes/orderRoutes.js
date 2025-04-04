import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user');
  res.json(order);
});

export default router;
