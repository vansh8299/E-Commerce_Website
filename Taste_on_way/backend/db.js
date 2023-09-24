const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/Tasteonwaymern";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
      foodCategory.find({}).toArray(function (err, catData) {
        if (err) console.log(err);
        else {
          global.food_items = data;
          global.foodCategory = catData;
        }
      });
      // if (err) console.log(err);
      // else {
      //   global.food_items = data;
      // }
    });
  });
};

module.exports = connectToMongo;
