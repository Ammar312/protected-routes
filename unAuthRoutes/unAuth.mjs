import router from "../APIv1/profile.mjs";

const getProfile = async (req, res, next) => {
  const userId = req.params.userId || req.body.decoded._id;

  if (!ObjectId.isValid(userId)) {
    res.status(403).send(`Invalid user id`);
    return;
  }
  try {
    const result = await dbCollection.findOne({
      _id: new ObjectId(userId),
    });
    console.log(result);
    res.send({
      message: "Profile fetched",
      data: {
        isAdmin: result.isAdmin,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        _id: result._id,
      },
    });
  } catch (error) {
    console.log("error getting data mongodb: ", error);
    res.status(500).send({ message: "server error, please try later" });
  }
};
router.get("/api/v1/profile/:userId", getProfile);

router.get("/posts", async (req, res, next) => {
  const userId = req.query._id;
  if (!ObjectId.isValid(userId) && userId !== undefined) {
    res.status(403).send(`Invalid post id`);
    return;
  }
  const allPosts = dbCollection
    .find({ authorId: new ObjectId(userId) })
    .sort({ _id: -1 })
    .limit(10);
  const allPostsIntoArray = await allPosts.toArray();
  console.log("allPostsIntoArray :", allPostsIntoArray);

  res.send(allPostsIntoArray);
});
