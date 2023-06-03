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
    const { name, lastname, email, password } = req.body;

    //check if email exist
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.status(400).send("Email already exists.");
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

const authenticateUser = (req, res) => {
    const {email, password} = req.body;

    if(email && password){

        pool.query(queries.authenticateUser, [email, password], (error, results) => {

            if (results.rows.length === 0) {
                res.status(400).send("Incorrect Email and/or Password!");
            } else {
                // Authenticate the user
                req.session.loggedin = true;
                req.session.email = email;
                req.session.name = results.rows[0].name;
                req.session.lastname = results.rows[0].lastname;
                req.session.user_id = results.rows[0].id;
                req.session.isGuide = results.rows[0].is_guide;
                res.status(200).send(`Hello, ${results.rows[0].name}!`);
            }
        });
    } else {
        response.send('Please enter Username and Password!');
    }
}
const logoutUser = (req, res) => {
    if(req.session.loggedin) {
        req.session.destroy();
        res.send("User logged out.");
    } else {
        res.send("No user logged in.");
    }
}

const removeUser = (req, res) => {
    if(req.session.loggedin) {
        //remove student from db
        pool.query(queries.removeUser, [req.session.user_id], (error, results) => {
            if(error) throw error
            logoutUser(req, res);
            console.log("User Deleted.");
        });
    } else {
        res.send("You have to be logged in!");
    }
}

const updateUser = (req, res) => {
    if(req.session.loggedin) {
        const id = parseInt(req.params.id);
        const {name, lastname} = req.body;

        if (req.session.user_id === id) {
            //update student in db
            const data = [
                id,
                name ? name : req.session.name,
                lastname ? lastname : req.session.lastname,
            ];

            pool.query(queries.updateUser, [...data], (error, results) => {
                if (error) throw error;
                res.status(200).send("User has been updated!");
                console.log("User Updated.");
            });
        } else {
            res.send("Wrong id!");
        }
    } else {
        res.send("You have to be logged in!");
    }
}

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    authenticateUser,
    logoutUser,
    removeUser,
    updateUser,
};