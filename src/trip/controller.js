const pool = require('../../db');
const queries = require('./queries');

const getUserTrips = (req, res) => {
    if (req.session.loggedin) {
        pool.query(queries.getUserTrips, [req.session.user_id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    } else {
        res.send("You have to be logged in!");
    }
}

const getGuideTrips = (req, res) => {
    const guide_id = parseInt(req.params.id);

    pool.query(queries.getGuideTrips, [guide_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getTripById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTripById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTrip = (req, res) => {
    const {offer_id, term_id} = req.body;

    if (req.session.loggedin) {
        pool.query(queries.addTrip, [offer_id, term_id, req.session.user_id], (error, results) => {
            if (error) throw error
            res.status(201).send("Trip reserved Successfully!");
            console.log("Trip reserved.");
        })
    } else {
        res.send("You have to be logged in!");
    }
}

const removeTrip = (req, res) => {
    const id = req.params.id;
    if (req.session.loggedin) {
        pool.query(queries.deleteTrip, [id], (error, results) => {
            if (error) throw error
            res.status(201).send("Trip deleted.")
        });
    } else {
        res.send("You have to be logged in!");
    }
}

module.exports = {
    getUserTrips,
    getGuideTrips,
    getTripById,
    addTrip,
    removeTrip,
};