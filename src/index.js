const express =  require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/serverconfig");

const setupAndStartServer  = async() =>{

    //create an express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT, ()=>{
        console.log(`Server running at port ${PORT}`);
    });

    
}
setupAndStartServer();  