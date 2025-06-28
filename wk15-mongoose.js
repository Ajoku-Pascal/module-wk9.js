const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// 2. Define User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

// 3. Create User model
const User = mongoose.model('User', userSchema);

// 4. Add and retrieve a user
async function addAndGetUser() {
  try {
    // Create a new user
    const newUser = new User({
      name: "Ajoku Pascal",
      email: "ajokupascal@gmail.com",
      age: 30
    });

    await newUser.save();
    console.log("User saved:", newUser);

    // Retrieve all users
    const allUsers = await User.find();
    console.log("All Users:");
    console.log(allUsers);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    mongoose.connection.close();
  }
}

addAndGetUser();
