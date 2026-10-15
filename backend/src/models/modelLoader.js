const fs = require("fs");
const path = require("path");
const sequelize = require("../config/database");


const db = {};
// basically reads every model file in this model folder 
fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file !== "modelLoader.js" &&
            file.endsWith(".js")
        );
    })
    .forEach(file => {

        // Load the model file
        const model = require(
            path.join(__dirname, file)
        )(sequelize);


        // Store it inside db object
        db[model.name] = model;

    });

const {User, Event} = db 
User.hasMany(Event, {
    foreignKey : "userId"
});
Event.belongsTo(User, {
    foreignKey: "userId"
});

/* 

db = {
User : userModel , 
....


}
basically contains the different "tables"


*/ 


