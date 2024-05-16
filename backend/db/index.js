const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(process.env.MONGO_URI);
        console.log('db is connected!')
    })
    .catch((ex) => {
        // console.log('db connection failed: ', ex)
        console.error('db connection failed: ', ex.message);
       
    })

    