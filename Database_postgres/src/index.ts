import express from 'express';
import bodyParser from 'body-parser';
import {pool} from './pool'
import {getName, updateEmployee} from './service'
import {connection} from './connectDB'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", async (req, res) => {
//     const result = await getName();
//     res.send(result);
// })

app.put("/", async (req, res) => {
    const { employee_id, first_name } = req.body;
    const result = await updateEmployee(employee_id, first_name);
    res.send(result);
})

connection();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

