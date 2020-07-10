const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (req, res) => {
  try {
    const mealById = await knex("meal").where(req.params);
    res.json(mealById);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
