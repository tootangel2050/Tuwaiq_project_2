const express = require("express");
const cors = require("cors");

const app = express();

//third-party middleware
app.use(cors());

const {testRouter} = require("./routers/routes/testRouter");
const { userRouter } = require("./routers/routes/userRouter");
const { cancelleTestRouter } = require("./routers/routes/testRouter");
const {
  availableTestForRegistrationRouter
} = require("./routers/routes/testRouter");
const { prevusRouter } = require("./routers/routes/testRouter");
const { resultedRouter } = require("./routers/routes/testRouter");
const { registeredTestsRouter } = require("./routers/routes/testRouter");


//built-in middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use("/test",testRouter)

// testRouter.get()
//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
