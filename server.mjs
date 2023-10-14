import express from "express";
import path from "path";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import apiv1 from "./APIv1/index.mjs";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use((req, res, next) => {
  const token = req.cookies.token;
  console.log("token", token);
  try {
    const decoded = Jwt.verify(token, process.env.SECRET);
    console.log("decoded", decoded);
    req.body.decoded = {
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      isAdmin: decoded.isAdmin,
    };
    next();
  } catch (error) {
    console.log("error ", error);
    res.status(401).send({ message: "invalid token" });
  }
});

app.use("/api/v1", apiv1);

app.use(express.static(path.join(__dirname, "web/dist")));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
