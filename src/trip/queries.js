const getGuideTrips = "SELECT t.id, t.offer_id, t.term_id, t.reserved_by, o.title, o.description, o.price FROM trip t INNER JOIN offer o ON o.id = t.offer_id WHERE o.guide_id = $1";
const getUserTrips = "SELECT t.id, t.offer_id, t.term_id, t.reserved_by, o.title, o.description, o.price FROM trip t INNER JOIN offer o ON o.id = t.offer_id WHERE t.reserved_by = $1";
const getTripById = "SELECT t.id, t.offer_id, t.term_id, t.reserved_by, o.title, o.description, o.price FROM trip t INNER JOIN offer o ON o.id = t.offer_id WHERE t.id = $1";
const addTrip = "INSERT INTO trip (offer_id, term_id, reserved_by) VALUES ($1, $2, $3)";
const deleteTrip = "DELETE FROM trip WHERE id = $1";

module.exports = {
    getGuideTrips,
    getUserTrips,
    getTripById,
    addTrip,
    deleteTrip,
}