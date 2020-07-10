const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
        const availableMeals = await knex.raw("SELECT meal.*,sum(reservation.number_of_guests) Total FROM meal INNER JOIN reservation on meal.id = reservation.meal_id GROUP BY meal.id HAVING Total < max_reservations");
        response.json(availableMeals[0]);
    } catch (error) {
        throw error;
 }
});

module.exports = router;