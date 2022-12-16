import bcrypt from 'bcryptjs';

// sample users to login with
const users = [
  {
    // admin - when logged in can view profiles/orders/update or delete products
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
