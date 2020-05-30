const mongoose = require('mongoose');
// Change username and password per your MongoDB account, as you can see from this tutorial https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/
const connection = "mongodb+srv://username:<password>@cluster0-czknq.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    