const songController = require("../controllers/song.controller");

module.exports = (app) => {
    app.post("/api/song", songController.createNewSong);
    app.get("/api/song", songController.getAllSongs);
    app.get("/api/song/:id", songController.getOneSong);
    app.put("/api/song/:id", songController.updateSong);
    app.delete("/api/song/:id", songController.deleteExistingUser);
};




