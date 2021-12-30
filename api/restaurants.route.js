import express from "express";

import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiPutReview)
  .delete(ReviewsCtrl.apiDeleteReview);

router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines);
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById);

export default router;
