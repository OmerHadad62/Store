import { Router } from "express";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
    try {
    const {password } = req.body;
    const incryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({ ...req.body, password: incryptedPassword });
    const response = await user.save();
    res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post("/login", async (req, res) => {
    const { firstName, password } = req.body;

    try {
        console.log("Received data:", req.body);

        if (!firstName || !password) {
            return res.status(400).json({ message: "First name and password are required" });
        }

        const user = await User.findOne({ firstName });
        if (!user) {
            return res.status(401).json({ message: "User doesn't exist" });
        }

        console.log("Password from database:", user.password);
        // ודא שהסיסמה שמורה כמו שצריך במסד הנתונים
        if (!user.password) {
            return res.status(500).json({ message: "User password is missing in the database" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = generateToken(user.id);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 3600000
        });

        res.json({ message: 'Logged in successfully' });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error);
    }
});

export default router;