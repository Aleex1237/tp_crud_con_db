const { check, body } = require("express-validator");

module.exports = [
  check("title")
    .notEmpty()
    .withMessage("Debe rellenar este campo")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("El minimo es de 5 caracteres y el maximo 100!")
    .bail()
    .isAlpha()
    .withMessage("Este campo solo acepta letras ej : a-z, A-Z")
    .bail(),
  check("rating")
    .notEmpty()
    .withMessage("Debe rellenar este campo")
    .bail()
    .isNumeric()
    .withMessage("Este campo solo acepta numeros")
    .bail(),
  check("awards")
    .notEmpty()
    .withMessage("Debe rellenar este campo")
    .bail()
    .isNumeric()
    .withMessage("Este campo solo acepta numeros")
    .bail()
    .isInt()
    .withMessage("Debe ingresar un numero entero!")
    .bail(),
  check("releaste_date")
    .isDate()
    .withMessage("Este campo solo acepta fechas!")
    .bail(),
  check("length")
    .notEmpty()
    .withMessage("Debe rellenar este campo")
    .bail()
    .isNumeric()
    .withMessage("Este campo solo acepta numeros!")
    .isInt()
    .withMessage("Debe ingresar un numero entero!")
    .bail(),
];
