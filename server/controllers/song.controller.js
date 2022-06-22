const Song = require("../models/songs.model");

const createNewSong = (req, res) => {
  Song.create(req.body)
    .then((newSong) => {
      res.json({ newSong });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
const createNewType = (req, res) => {
  Type.create(req.body)
    .then((newType) => {
      res.json({ newType });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
const createNewDescription= (req, res) => {
  Description.create(req.body)
    .then((newDescription) => {
      res.json({ newDescription});
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getAllSongs = (req, res) => {
  Song.find()
    .then((allSongs) => {
      res.json(allSongs);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOneSong = (req, res) => {
  Song.findOne({ _id: req.params.id })
    .then((queriedSong) => {
      res.json(queriedSong);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const updateSong = (req, res) => {
  Song.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedSong) => {
      res.json({ updatedSong });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
  Song.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewSong,
  createNewType,
  getOneSong,
  getAllSongs,
  updateSong,
  deleteExistingUser,
};