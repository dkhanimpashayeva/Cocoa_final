// const express = require("express");
// const {
//   getAllProducts,
//   updateProduct,
//   deleteProduct,
//   getAllProductsDetails,
//   getAdminProducts,
//   createProductReview,
//   getProductReviews,
//   deleteReview,
//   newProduct,
// } = require("../controllers/productController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const router = express.Router();
// router.route("/products").get(getAllProducts);
// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


// router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"),newProduct);

// router
//   .route("/admin/product/:id")
//   .put( updateProduct);
// router
//   .route("/admin/product/:id")
//   .delete(deleteProduct);

// router.route("/product/:id").get(getAllProductsDetails);


// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);


// module.exports = router;



const express = require("express");
const {
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllProductsDetails,
  getAdminProducts,
  createProductReview,
  getProductReviews,
  deleteReview,
  createProduct 
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
router.route("/products").get(getAllProducts);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


// router.route("/admin/product/new").post(newProduct);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);



router
  .route("/admin/product/:id")
  .put( updateProduct);
router
  .route("/admin/product/:id")
  .delete(deleteProduct);

router.route("/product/:id").get(getAllProductsDetails);


router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);


module.exports = router;


