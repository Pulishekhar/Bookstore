import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Signup function
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashPassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword, // Hashing for security
        });

        // Save the user to the database
        await createdUser.save();

        // Send success response
        res.status(201).json({ message: "User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }});
    } catch (error) {
        console.log("Error: " + error.message); // Log the error message
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the password matches
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // If successful, send the response
        res.status(200).json({
            message: "Login successful",
            user: {
                _id:user._id,
                fullname: user.fullname,
                email: user.email,
            }
        });

    } catch (error) {
        console.log("Error: " + error.message); // Log the error message
        res.status(500).json({ message: "Internal server error" });
    }
};
