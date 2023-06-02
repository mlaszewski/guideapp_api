const express = require('express');
const session = require('express-session');
const userRoutes = require("./src/users/routes");
const guideRoutes = require("./src/guide/routes");
const placeRoutes = require("./src/place/routes");
const termRoutes = require("./src/term/routes");
const offerRoutes = require("./src/offer/routes");
const tripRoutes = require("./src/trip/routes");

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
app.use('/api/v1/places', placeRoutes);
app.use('/api/v1/terms', termRoutes);
app.use('/api/v1/offers', offerRoutes);
app.use('/api/v1/trips', tripRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));