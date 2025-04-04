import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-4">
  <a href="/" className="hover:underline">Home</a>
  <a href="/products" className="hover:underline">Products</a>
  <a href="/cart" className="hover:underline">Cart</a>
  <a href="/login" className="hover:underline">Login</a>
  <a href="/register" className="hover:underline">Register</a>
</nav>
);

export default Navbar;
