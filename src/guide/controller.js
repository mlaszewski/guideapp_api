const pool= require('../../db');
const queries = require('./queries');

const getGuideById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getGuideById, [id], (error, results) => {
        if(error) throw error;

        if(results.rows.length){
            res.status(200).json(results.rows);
        } else {
            res.status(404).send("Guide not found.")
        }
    })
}

const createGuideProfile = (req, res) => {
    if(req.session.loggedin) {
        const {description, experience, courses,
            licenses, specs, languages} = req.body;
        const guideInfo = {
            description: description,
            experience: experience,
            courses: courses,
            licenses: licenses,
            specs: specs,
            languages: languages
        }

        let missingInfo = [];
        for (const [key, value] of Object.entries(guideInfo)) {
            if(value === undefined) {
                missingInfo.push(key);
            }
        }

        if(missingInfo.length) {
            res.send(`There is some missing information: ${missingInfo.map(item => ` ${item}`)}`);
        } else {
            pool.query(
                queries.updateGuideInfo,
                [req.session.user_id, ...Object.values(guideInfo)],
                (error, results) => {
                    if(error) throw error;
                    res.status(200).send("You are now a Guide!");
                });
        }
    } else {
        res.send("You have to be logged in!");
    }
}

module.exports = {
    getGuideById,
    createGuideProfile,

};