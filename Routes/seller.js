const express = require("express");
const router = express.Router();
const {
  getAllseller,
  createNewseller,
  deleteseller,
  updatesellerById,
} = require("../Controller/seller");

router.get("/", (req, res) => {
  getAllseller()
    .then(([ele]) => {
      res.status(200).json(ele);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  var seller = req.body;
  createNewseller(seller)
    .then(([ele]) => {
      res.status(200).json(ele);
    })
    .catch((err) => {
      res.status(422).json({ message: err.message });
    });
});

router.delete("/:id", (req, res) => {
  var { id } = req.params;
  deleteseller(id)
    .then(([ele]) => {
      res.status(200).json(ele);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.patch("/:id", (req, res, next) => {
  var { id } = req.params;
  var { name } = req.body;
  updatesellerById(id, name)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch(() => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
