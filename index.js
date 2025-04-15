import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import { validationResult } from 'express-validator';
import UserModel from './models/User.js';

mongoose.connect('mongodb+srv://admin:<db_password>@cluster0.muk3gyf.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
  }
  ).catch((err) => {
    console.error('MongoDB connection error:', err);
  }
  );

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json())

app.post('/auth/register', registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  res.json({
    succes: true,
  })

  const password = req.body.password;
  
  const salt = await bcrypt.genSaltSync(10);
  const passwordHash = await bcrypt.hash(password, salt);


  const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    avatarUrl: req.body.avatarUrl,
    passwordHash,
  });

  const user = await doc.save()

  res.json(user);

  const token = jwt.sign({
    email: req.body.email,
    password: req.body.password,
    fullNamr: req.body.fullName,
  },
    'secret1234',)
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Server is running on http://localhost:3000');
})

