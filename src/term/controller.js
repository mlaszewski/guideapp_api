const pool = require('../../db');
const queries = require('./queries');

const getGuideTerms = (req, res) => {
    const guide_id = parseInt(req.params.id);

    pool.query(queries.getGuideTerms, [guide_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const getTermById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTermById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTerm = (req, res) => {
    const { timestamp } = req.body;

    if(req.session.loggedin){
        if(req.session.isGuide){
            pool.query(queries.checkTermExists, [timestamp, req.session.user_id], (error, results) => {
                if (results.rows.length) {
                    res.send("Term already exists.");
                } else {
                    //add student to db
                    pool.query(queries.addTerm, [timestamp, req.session.user_id], (error, results) => {
                        if (error) throw error
                        res.status(201).send("Term Created Successfully!");
                        console.log("Term Created.");
                    })
                }
            });
        }else {
            res.send("You have to be a Guide to set terms.");
        }
    } else {
        res.send("You have to be logged in!");
    }
}

const removeTerm = (req, res) => {
    const id = req.params.id;

    if(req.session.loggedin){
        if(req.session.isGuide){
            pool.query(queries.deleteTerm, [id], (error, results) => {
                if (error) throw error
                res.status(201).send("Term deleted.")
            });
        }else {
            res.send("You have to be a Guide to set terms.");
        }
    } else {
        res.send("You have to be logged in!");
    }
}

module.exports = {
    getGuideTerms,
    getTermById,
    addTerm,
    removeTerm,
};