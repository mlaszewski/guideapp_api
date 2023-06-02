const addOffer = "INSERT INTO offer (place_id, guide_id, title, description, price) VALUES ($1, $2, $3, $4, $5)";
const deleteOffer = "DELETE FROM offer WHERE id = $1";
const updateOffer = "UPDATE offer SET title = $2, description = $3, price = $4 WHERE id = $1";
const getOfferById = "SELECT * FROM offer WHERE id = $1";
const getGuideOffers = "SELECT * FROM offer WHERE guide_id = $1";

module.exports = {
    addOffer,
    deleteOffer,
    updateOffer,
    getOfferById,
    getGuideOffers,
}