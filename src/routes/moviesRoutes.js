const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const addValidations = require("../validations/addValidations");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recomended);
router.get("/movies/detail/:id", moviesController.detail);

//Rutas exigidas para la creación del CRUD
router.get("/movies/add", moviesController.add);
router.post("/movies/create", addValidations, moviesController.create);
router.get("/movies/:id/edit", moviesController.edit);
router.put("/movies/:id/update", addValidations, moviesController.update);
router.get("/movies/movie/:id/delete", moviesController.destroy);
router.delete("/movies/movie/:id/delete", moviesController.delete);

module.exports = router;
