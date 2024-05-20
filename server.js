import express from "express";
const app = express();
const port = 3000;

var data = "";
// Middleware to parse JSON bodies
app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log(req.body);
    data = JSON.stringify(req.body)
    res.send(`Received POST request with body: ${JSON.stringify(req.body)}`);
});

app.get('/', (req, res) => {
  res.send(`Received Data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
