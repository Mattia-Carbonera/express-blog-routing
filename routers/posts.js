const express = require("express");
const router = express.Router();

// index
router.get("/", (req, res) => {
  res.json("Visualizzo tutti gli elementi");
});

// show
router.get("/:id", (req, res) => {
  const index = req.params.id;

  res.json(`Visualizzo un elemento: ${index}`);
});

// store
router.post("/", (req, res) => {
  const index = req.params.id;

  res.json("Creo un nuovo elemento");
});

// put
router.put("/:id", (req, res) => {
  const index = req.params.id;

  res.json(`Modifico interamente un elemento: ${index}`);
});

// patch
router.patch("/:id", (req, res) => {
  const index = req.params.id;

  res.json(`Modifico parzialmente un elemento: ${index}`);
});

// patch
router.delete("/:id", (req, res) => {
  const index = req.params.id;

  res.json(`Elimino un elemento: ${index}`);
});

module.exports = router;
