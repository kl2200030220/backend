import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const port = 8080;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // MySQL username
  password: 'Bunny@0407', // MySQL password
  database: 'mentorship', // MySQL database name
});

app.use(cors());
app.use(bodyParser.json());

// Sign Up Endpoint
app.post('/api/signup', (req, res) => {
  const { name, email, password, role, subjects } = req.body;

  // Store the plaintext password directly in the database (no hashing or transformation)
  const query = 'INSERT INTO users (name, email, password, role, expertise) VALUES (?, ?, ?, ?, ?)';

  // Ensure subjects are only set for mentors, else leave as null
  const expertise = role === 'mentor' ? subjects : null;

  db.query(query, [name, email, password, role, expertise], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Error creating account' });
    }

    // Generate a token after signup
    const token = jwt.sign({ id: results.insertId, email, role }, 'your-secret-key', { expiresIn: '1h' });

    // Send response back with token and role
    res.status(201).json({
      message: 'Account created successfully',
      token,
      role,
    });
  });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Ensure the email comparison is case-insensitive and trimmed
  const query = 'SELECT * FROM users WHERE LOWER(email) = LOWER(?)';

  db.query(query, [email.trim()], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ message: 'Login failed' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    // Check if the entered password matches the stored password (plaintext comparison)
    if (user.password !== password.trim()) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a token for successful login
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token,
      role: user.role,
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
