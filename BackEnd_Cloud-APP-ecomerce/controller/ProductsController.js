const productsModel = require("../models/ProductModel");
require("dotenv").config();

module.exports = {
  createProduct: (req, res, next) => {
    console.log(req.body.image);
    let objWithoutImage = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      productGender: req.body.productGender,
      productType: req.body.productType,
    };
    let obj = {
      image: req.file && req.file.path,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      productGender: req.body.productGender,
      productType: req.body.productType,
    };
    if (obj.image == null) {
      productsModel
        .create(objWithoutImage)
        .then((result) => {
          res.json({
            status: "success",
            message: "Successfully create product!",
            data: result,
          });
        })
        .catch((error) => res.status(400).json(error));
    } else {
      productsModel
        .create(obj)
        .then((result) => {
          res.json({
            status: "success",
            message: "Successfully create product!",
            data: result,
          });
        })
        .catch((error) => res.status(400).json(error));
    }
  },

  editProductById: (req, res, next) => {
    userId = req.params.productId;
    productsModel.findById(userId).then((dataUserId) => {
      productsModel
        .findByIdAndUpdate(
          userId,
          {
            image: (req.file && req.file.path) || dataUserId.image,
            name: req.body.name || dataUserId.name,
            price: req.body.price || dataUserId.price,
            description: req.body.description || dataUserId.description,
            quantity: req.body.quantity || dataUserId.quantity,
            productGender: req.body.productGender || dataUserId.productGender,
            productType: req.body.productType || dataUserId.productType,
          },
          { new: true }
        )
        .then((result) => {
          res.json({
            message: `The data of ${userId} successfully edited.`,
            data: result,
          });
        })
        .catch((error) => res.status(400).json(error));
    });
  },

  getAllProducts: (req, res, next) => {
    productsModel
      .find({})
      .then((result) => {
        res.json({
          status: "success",
          message: "Successfully get all products!",
          data: result,
        });
      })
      .catch((error) => res.status(400).json(error));
  },

  getProductId: (req, res, next) => {
    productsModel
      .findById(req.params.productId)
      .then((result) => {
        res.json({
          status: "success",
          message: `Successfully get data id of ${req.params.productId} !`,
          data: result,
        });
      })
      .catch((error) => res.status(400).json(error));
  },

  deleteById: (req, res, next) => {
    productsModel
      .findByIdAndRemove(req.params.productId)
      .then(() => {
        res.json({
          status: "success",
          message: `Successfully delete id of ${req.params.productId} !`,
        });
      })
      .catch((error) => res.status(400).json(error));
  },
};
