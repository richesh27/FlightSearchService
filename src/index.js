const express =  require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/serverconfig");

const ApiRoutes  = require('./routes/index');

const sequelize = require('sequelize')
const db = require('./models/index');
const {City,Airport}  = require('./models/index')

const setupAndStartServer  = async() =>{

    //create an express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server running at port ${PORT}`);

        db.sequelize.sync({alter: true});
        // const city = await City.findOne({
        //     where: {
        //         id:10
        //     }
        // });
        // console.log(city)
    });
}
setupAndStartServer();  