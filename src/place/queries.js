const addPlace = "INSERT INTO places (name, address, coordinates_x, coordinates_y, city, country) VALUES ($1, $2, $3, $4, $5, $6)";
const deletePlace = "DELETE FROM places WHERE id = $1";
const updatePlace = "UPDATE places SET name = $2, address = $3, coordinates_x = $4, coordinates_y = $5, city = $6, country = $7 WHERE id = $1";
const getPlaces = "SELECT * FROM places";
const getPlaceById = "SELECT * FROM places WHERE id = $1";
const checkPlaceExists = "SELECT * FROM places WHERE name = $1 AND address = $2";

module.exports = {
    addPlace,
    deletePlace,
    updatePlace,
    getPlaces,
    getPlaceById,
    checkPlaceExists,
}