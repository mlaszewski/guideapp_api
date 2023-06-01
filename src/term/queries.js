const addTerm = "INSERT INTO term (timestamp, guide_id) VALUES ($1, $2)";
const deleteTerm = "DELETE FROM term WHERE id = $1";
const updateTerm = "UPDATE term SET timestamp = $2, guide_id = $3, is_reserved = $4 WHERE id = $1";
const getTermById = "SELECT * FROM term WHERE id = $1";
const checkTermExists = "SELECT * FROM term WHERE timestamp = $1 AND guide_id = $2";
const getGuideTerms = "SELECT * FROM term WHERE guide_id = $1";

module.exports = {
    addTerm,
    deleteTerm,
    updateTerm,
    getTermById,
    checkTermExists,
    getGuideTerms
}