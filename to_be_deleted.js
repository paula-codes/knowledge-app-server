// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require("mongoose");

// const app = express();
// const port = 80;

// const corsOptions = {
//     origin: 'https://knowledge-sharing-app.netlify.app',
//     credentials: true,
// };
// app.use(cors(corsOptions));

// mongoose.connect('mongodb+srv://accenturetest:accenturepwd@knowledge-accenture.ffhbf.mongodb.net/knowledge-accenture?retryWrites=true&w=majority',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });

// // // Configuring body parser middleware
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // app.get('/details', async (req, res) => {
// //     // const user = await userModel.findOne({id: 123});
// //     const user = await userModel.find({});
// //     res.send(user);
// // });

// app.get("/employees", (req, res) => {
//     let db_connect = dbo.getDb();
//     db_connect
//       .collection("employees")
//       .find({})
//       .toArray(function (err, result) {
//         if (err) throw err;
//         res.json(result);
//       });
//   });

// app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))