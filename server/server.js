import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';

const app = express();
const PORT = process.env.PORT || 8080;

function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }
  
let users = faker.helpers.multiple(createRandomUser, {
    count: 10,
  });

app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your front-end's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
}));

app.use((req, res, next) => {
    console.log(`REQ ${req.method} ${req.url} ip: ${req.ip}`)
    next();
})

app.get('/users', (req, res) => {
    console.log('Request for /users')
    res.json(users)
})

app.post('/users', (req, res) => {
    const newUser = {
        userId: faker.string.uuid(),
        avatar: faker.image.avatar(),
        ...req.body.user
    }

    users.push(newUser);

    res.json({ success: true, user: newUser })
})

app.get('/users/:userId', (req, res, next) => {
    const userId = req.params.userId;

    try {
        const foundUser = users.find((user) => {
            return user.userId === userId;
        })

        if (!foundUser) {
            res.json({ error: true, message: 'User not found.' })
        }

        res.json(foundUser)
    } catch(err) {
        res.json({ error: true, message: 'User not found.' })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})



