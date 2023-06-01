const getGuideById = "SELECT * FROM users WHERE id = $1 AND is_guide = true";
const updateGuideInfo = "UPDATE users SET description = $2, experience = $3, courses = $4, licenses = $5, specs = $6, languages = $7, is_guide = true WHERE id = $1";
const checkIfGuideInFav = "SELECT * FROM user_fav_guides WHERE user_id = $1 AND guide_id = $2";
const addGuideToFav = "INSERT INTO user_fav_guides(user_id, guide_id) VALUES ($1, $2)";
const removeGuideFromFav = "DELETE FROM user_fav_guides WHERE user_id = $1 AND guide_id = $2";


module.exports = {
    getGuideById,
    updateGuideInfo,
    checkIfGuideInFav,
    addGuideToFav,
    removeGuideFromFav,
}