// Hello World basic routing
// import http, { IncomingMessage, ServerResponse } from 'http';
// import express, {Request, Response} from 'express';
// import 'reflect-metadata';
// import { validate } from 'class-validator';
// import {CreateUserDto} from './dto/CreateUserDto';
// import { plainToClass } from 'class-transformer';


// function index(req: IncomingMessage, res: ServerResponse) {
//     res.writeHead(200);
//     res.end('Hello World!');
// }

// http.createServer((req: IncomingMessage, res: ServerResponse) => {
//     if (req.url === '/') {
//         return routes[req.url](req, res);
//     }

//     res.writeHead(404);
//     res.end(http.STATUS_CODES[404]);
// }).listen(1337);

// var routes = {
//     '/': function index(req: IncomingMessage, res: ServerResponse) {
//         res.writeHead(200);
//         res.end('Hello, World');
//     },
//     '/foo': function foo(req: IncomingMessage, res: ServerResponse) {
//         res.writeHead(200);
//         res.end('You are now viewing "foo"');
//     }
// }

// const app = express();
// app.use(express.json());
// app.get('/hello', query('person').notEmpty().escape(), (req: Request, res: Response) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//         res.send(`Hello, ${req.query.person}!`);
//     } else {
//         res.send({errors: result.array()});
//     }
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// app.use(express.json()); // Middleware để parse request body là JSON

// app.post('/data', (req: Request, res: Response) => {
//   const data = req.body;
//   console.log('Received data:', data);
//   res.json({ message: 'Data received successfully', data });
// });
// app.listen(3000);

// const app = express();
// app.use(express.json());
// const port = 3000;

// -----------------------------Class-validator--------------------------
// app.post('/users', async (req: Request, res: Response) => {
//     const createUserDto = new CreateUserDto();
//     createUserDto.name = req.body.name;
//     createUserDto.email = req.body.email;
//     createUserDto.password = req.body.password;

//     const errors = await validate(createUserDto);

//     if (errors.length > 0) {
//         res.status(400).json({errors});
//         return;
//     }

//     res.status(201).json({message: 'User created successfully', data: createUserDto});
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// })

// -----------------------------CLass-transformer--------------------------

// import {Expose, Type} from 'class-transformer';

// class User {
//     @Expose({name: 'userId'})
//     id!: number;

//     @Expose({name: 'name'})
//     fullname!: string;

//     @Expose({name: 'email_address'})
//     email!: string;

//     @Expose({name: 'registration_date'})
//     @Type(() => Date)
//     registeredAt!: Date;

//     getGreeting(): string {
//         return `Hello, ${this.fullname}!`;
//     }
// }

// import {plainToInstance} from 'class-transformer';

// class User {
//   firstName: string;
//   lastName: string;

//   constructor(firstName: string, lastName: string) {};

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

import express from 'express';
import initAPINewUser from './route/app';

require ('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true })); // Middleware để parse request body là x-www-form-urlencoded
app.use(express.json()); // Middleware để parse request body là JSON

// initAPI(app);
initAPINewUser(app);


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})
