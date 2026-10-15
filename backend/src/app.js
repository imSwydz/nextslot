import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test/hello", (req,res) => {
  res.json({
    message : "hello from the backend!"
  });
});
app.use("/", router);

export default app;


