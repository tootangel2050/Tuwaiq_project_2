const express = require('express');
const cors = require('cors');

const app = express();

const {userRouter} = require("./routers/routes/userRouter");
const {cancelleTestRouter} = require("./routers/routes/cancelleTestRouter");
const{availableTestForRegistrationRouter} = require("./routers/routes/availableTestForRegistrationRouter");
const {prevusRouter} = require("./routers/routes/prevusRouter")
//routers

//built-in middlewares
app.use(express.json());
app.use("/users",userRouter);
app.use("/cancellesTest",cancelleTestRouter);
app.use("/availableTestsForRegistration",availableTestForRegistrationRouter);
app.use("/prevuss",prevusRouter);


//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});