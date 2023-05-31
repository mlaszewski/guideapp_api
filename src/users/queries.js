const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addUser = "INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4)";
const removeUser = "DELETE FROM users u WHERE u.id = $1";
const updateUser = "UPDATE users SET name = $2, lastname = $3 WHERE id = $1"

module.exports = {
    getUsers,
    getUsersById,
    checkEmailExists,
    addUser,
    removeUser,
    updateUser,
}