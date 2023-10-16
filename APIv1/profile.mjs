import express from "express";
const router = express.Router();
import { client } from "../mongodb.mjs";
const db = client.db("socialapp");
const dbCollection = db.collection("users");

router.get("/profile", async (req, res, next) => {
  try {
    const result = await dbCollection.findOne({
      email: req.body.decoded.email,
    });
    console.log(result);
    res.send({
      message: "Profile fetched",
      data: {
        isAdmin: result.isAdmin,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
      },
    });
  } catch (error) {
    console.log("error getting data mongodb: ", error);
    res.status(500).send({ message: "server error, please try later" });
  }
});

export default router;
