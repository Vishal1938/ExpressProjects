
import {getAllUsers,addUser,confirmUserLogin} from '../model/user.js'

// Function to handle user registration
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Check if user with the provided email already exists
  const existingUser = getAllUsers().find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  // Add the new user
  const newUser = addUser(name, email, password);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Function to handle user login
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Confirm user login
  const user = confirmUserLogin(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Here you may generate a token for authenticated user if needed
  // For example, using JSON Web Tokens (JWT)

  res.status(200).json({ message: 'Login successful', user });
};
