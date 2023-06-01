const pool = require('../../db');
const queries = require('./queries');

const getGuideOffers = (req, res) => {
    const guide_id = parseInt(req.params.id);

    pool.query(queries.getGuideOffers, [guide_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const getOfferById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getOfferById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addOffer = (req, res) => {
    const {place_id, description, price} = req.body;

    if (req.session.loggedin) {
        if (req.session.isGuide) {
            //add student to db
            pool.query(queries.addOffer, [place_id, req.session.user_id, description, price], (error, results) => {
                if (error) throw error
                res.status(201).send("Offer Created Successfully!");
                console.log("Offer Created.");
            })
        } else {
            res.send("You have to be a Guide to create offer.");
        }
    } else {
        res.send("You have to be logged in!");
    }
}

const removeOffer = (req, res) => {
    const id = req.params.id;
    if (req.session.loggedin) {
        if (req.session.isGuide) {
            pool.query(queries.deleteOffer, [id], (error, results) => {
                if (error) throw error
                res.status(201).send("Offer deleted.")
            });
        } else {
            res.send("You have to be a Guide to create offer.");
        }
    } else {
        res.send("You have to be logged in!");
    }
}

module.exports = {
    getGuideOffers,
    getOfferById,
    addOffer,
    removeOffer,
};