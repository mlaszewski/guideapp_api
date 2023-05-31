const pool= require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}
const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const { name, email, age, dob } = req.body;

    //check if email exist
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        } else {
            //add student to db
            pool.query(queries.addUser, [name, lastname, email, password], (error, results) => {
                if (error) throw error
                res.status(201).send("User Created Successfully!");
                console.log("User Created.");
            })
        }
    })
}

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUsersById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send("User doesn't exists.");
        } else {
            //remove student from db
            pool.query(queries.removeUser, [id], (error, results) => {
                if(error) throw error
                res.status(200).send("User has been removed!");
                console.log("User Deleted.");
            });
        }
    });
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, lastname} = req.body;

    pool.query(queries.getUsersById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send("User doesn't exists.");
        } else {
            //update student in db
            const data = [
                id,
                name ? name : results.rows[0]?.name,
                lastname ? lastname : results.rows[0]?.lastname
            ];
            pool.query(queries.updateUser, [...data], (error, results) => {
                if (error) throw error;
                res.status(200).send("User has been updated!");
                console.log("User Updated.");
            });
        }
    });
}

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    removeUser,
    updateUser,
};