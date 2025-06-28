const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// 2. Define User schema with validation
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be greater than 0"]
  }
}, {
  timestamps: true
});

// 3. Create the unique index for email manually (once)
userSchema.index({ email: 1 }, { unique: true });

// 4. Create the User model
const User = mongoose.model('User', userSchema);

// 5. Function to add and retrieve users
async function addAndGetUser() {
  try {
    const newUser = new User({
      name: "Ajoku Pascal",
      email: "ajokupascal@gmail.com",
      age: 30
    });

    await newUser.save();
    console.log("User saved:", newUser);

    const allUsers = await User.find();
    console.log("All Users:");
    console.log(allUsers);
  } catch (error) {
    if (error.code === 11000) {
      console.error("Error: Duplicate email detected");
    } else {
      console.error("Validation Error:", error.message);
    }
  } finally {
    mongoose.connection.close();
  }
}

addAndGetUser();
