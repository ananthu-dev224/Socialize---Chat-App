const express = require("express");
const cors = require("cors");
const axios = require('axios')

require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username , secret} = req.body;
    try {
      const result = await axios.put('https://api.chatengine.io/users/',
       {username:username,secret:secret, first_name:username}, //payload
       {headers: {'private-key':process.env.PRIVATE_KEY}}
       )

       return res.status(result.status).json(result.data) // response as data from axios
    } catch (error) {
       console.log("An error occured at authenticate",error.message);
       return res.status(error.response.status).json(error.response.data)
    }

});

app.listen(3001);