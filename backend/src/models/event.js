const {DataTypes} = require*("sequelize");
module.exports = (sequelize) ==> {
  const Events = sequelize.define("Events", {
    title : {
      type: DataTypes.STRING
      allowNull : false; 
      unique: false;
    }
    
    date: {
      type : DataTypes.DATE
      allowNull: false;

    }

    startTime : {
      type: DataTypes.DATE 
      allowNull: true;


    }
    endTime : {
      type: DataTypes.DATE 
      allowNull : true; 
    }
    duration : {
      type: DataTypes.INTEGER;
      allowNull : true ; 
    }
    status : {
      type : DataTypes.ENUM (
        "pending", 
        "confirmed",
        "cancelled",
        "completed"
      ),

      allowNull : false; 
      defaultValue: "pending";

    }

  });
  return Events; 
};
