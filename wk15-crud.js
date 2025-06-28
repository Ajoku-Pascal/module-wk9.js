const { MongoClient } = require("mongodb");

// MongoDB connection URI (replace with your own if using Atlas)
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the database
    await client.connect();
    const db = client.db("myAppDB");
    const usersCollection = db.collection("users");

    // 1. Add a user
    const newUser = {
      name: "Ajoku Pascal",
      email: "ajokupascal@gmail.com",
      age: 30,
      createdAt: new Date()
    };

    const insertResult = await usersCollection.insertOne(newUser);
    console.log("User inserted with ID:", insertResult.insertedId);

    // 2. Fetch all users
    const allUsers = await usersCollection.find().toArray();
    console.log("All Users:");
    console.log(allUsers);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();
