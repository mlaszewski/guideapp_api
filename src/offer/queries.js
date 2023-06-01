const addOffer = "INSERT INTO offer (place_id, guide_id, description, price) VALUES ($1, $2, $3, $4)";
const deleteOffer = "DELETE FROM offer WHERE id = $1";
const updateOffer = "UPDATE offer SET description = $2, price = $3 WHERE id = $1";
const getOfferById = "SELECT * FROM offer WHERE id = $1";
const getGuideOffers = "SELECT * FROM offer WHERE guide_id = $1";

module.exports = {
    addOffer,
    deleteOffer,
    updateOffer,
    getOfferById,
    getGuideOffers,
}