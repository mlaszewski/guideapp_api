const pool = require('../../db');
const queries = require('./queries');

const getPlaces = (req, res) => {
    pool.query(queries.getPlaces, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const getPlaceById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPlaceById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addPlace = (req, res) => {
    const {name, address, coordinates_x, coordinates_y, city, country} = req.body;

    //check if email exist
    pool.query(queries.checkPlaceExists, [name, address], (error, results) => {
        if (results.rows.length) {
            res.send("Place already exists.");
        } else {
            //add student to db
            pool.query(queries.addPlace, [name, address, coordinates_x, coordinates_y, city, country], (error, results) => {
                if (error) throw error
                res.status(201).send("Place Created Successfully!");
                console.log("Place Created.");
            })
        }
    })
}

const removePlace = (req, res) => {
    const id = req.params.id;
    //remove place from db
    pool.query(queries.deletePlace, [id], (error, results) => {
        if (error) throw error
        res.status(200).send("Place deleted.")
    });
}

const updatePlace = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPlaceById, [id], (error, results) => {
        if (results.rows.length) {
            const {name, address, coordinates_x, coordinates_y, city, country} = req.body;
            const data = [
                id,
                name ? name : results.rows[0].name,
                address ? address : results.rows[0].address,
                coordinates_x ? coordinates_x : results.rows[0].coordinates_x,
                coordinates_y ? coordinates_y : results.rows[0].coordinates_y,
                city ? city : results.rows[0].city,
                country ? country : results.rows[0].country
            ];

            pool.query(queries.updatePlace, [...data], (error, results) => {
                if (error) throw error;
                res.status(200).send("Place has been updated!");
                console.log("Place Updated.");
            });
        } else {
            res.status(404).send("Place doesn't exist!");
        }
    });
}

module.exports = {
    getPlaces,
    getPlaceById,
    addPlace,
    removePlace,
    updatePlace
};