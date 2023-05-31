const express = require('express');
const session = require('express-session');
const userRoutes = require("./src/users/routes");
const guideRoutes = require("./src/guide/routes");

const app = express();
const port = 3000;

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/guides', guideRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));