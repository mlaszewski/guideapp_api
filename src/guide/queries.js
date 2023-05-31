const getGuideById = "SELECT * FROM users WHERE id = $1 AND is_guide = true";
const updateGuideInfo = "UPDATE users SET description = $2, experience = $3, courses = $4, licenses = $5, specs = $6, languages = $7, is_guide = true WHERE id = $1";

module.exports = {
    getGuideById,
    updateGuideInfo,
}