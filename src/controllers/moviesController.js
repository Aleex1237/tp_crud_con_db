const db = require("../database/models");
const sequelize = db.sequelize;
const { validationResult } = require("express-validator");

const moviesController = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      res.render("moviesList.ejs", { movies });
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail.ejs", { movie });
    });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("newestMovies", { movies });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 8 },
      },
      order: [["rating", "DESC"]],
    }).then((movies) => {
      res.render("recommendedMovies.ejs", { movies });
    });
  }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: (req, res) => {
    res.render("moviesAdd");
  },
  create: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Movie.create({
        ...req.body,
      });
      res.redirect("/movies");
    } else {
      res.render("moviesAdd", { errors: errors.mapped(), old: req.body });
    }
  },
  edit: function (req, res) {
    db.Movie.findByPk(req.params.id)
      .then((Movie) => {
        res.render("moviesEdit", { Movie });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  update: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Movie.update({
        ...req.body,
      });
      res.redirect("/movies");
    } else {
      res.render("moviesEdit", {
        Movie,
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  destroy: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then((movie) => {
        res.render("moviesDelete", { movie });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  delete: function (req, res) {
    db.Movie.destroy({ where: { id: req.params.id } });
    res.redirect("/movies");
  },
};

module.exports = moviesController;
