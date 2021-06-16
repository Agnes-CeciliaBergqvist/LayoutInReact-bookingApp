//Server js 
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//Route 
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

//Gmail 
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jeff.reilly@ethereal.email',
        pass: 'GqeQnYqjNEQVWvv9ax'
    }
});
  
  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  }) 