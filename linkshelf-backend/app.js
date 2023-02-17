require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const rescollectionRoutes = require("./routes/rescollection");

mongoose
	.connect('mongodb://' + process.env.MU + ':' + process.env.MPW + '@G0DF66ACB27C3BC-L93DGI0OCNLPZ4ON.adb.ap-mumbai-1.oraclecloudapps.com:27016/memp?authMechanism=PLAIN&authSource=$external&ssl=true&retryWrites=false&sslValidate=false&loadBalanced=true', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("DB CONNECTED");
	})
	.catch((e) => {
		console.log(e);
		console.log("DB NOT CONNECTED");
	});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api/collection/", rescollectionRoutes);

//dot env see docs for more explaination
const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`app is running at ${port}`);
});
