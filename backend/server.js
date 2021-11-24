const express = require('express');
const cors = require('cors');

const app = express();

//third-party middleware
app.use(cors());

const {userRouter} = require("./routers/routes/userRouter");
const {cancelleTestRouter} = require("./routers/routes/cancelleTestRouter");

//routers

//built-in middlewares
app.use(express.json());
app.use("/users",userRouter);
app.use("/cancellesTest",cancelleTestRouter);



//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});