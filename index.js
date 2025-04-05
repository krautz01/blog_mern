import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json())

app.post('/auth/login', (req, res) => {
  res.json({
    succes: true,
    token,
  })

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

