const express = require("express");
const app = express();
const PORT = 8001;
const bodyParser = require("body-parser");
const cors = require("cors");

//routes
const userRoute = require("./routes/userRoutes");
const authorRoute = require("./routes/authorRoutes");
const projectRoute = require("./routes/projectRoutes");

//setting
app.set("port", process.env.PORT || PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

// Routing
app.use("/user", userRoute);
app.use("/author", authorRoute);
app.use("/project", projectRoute);

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중')
});
